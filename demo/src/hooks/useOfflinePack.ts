import { useEffect, useState } from "react";

// Listed at build time by ../../offlinePack.ts and precached with the app shell
const OFFLINE_PACK_URL = "/offline-pack.json";
// The runtime caches the service worker serves the pack's files from (see
// ../../vite.config.ts): the app's own assets and the kuromoji dictionary
const ASSETS_CACHE = "assets";
const DICT_CACHE = "kuromoji-dict";
const CONCURRENCY = 6;
// Minimum delays before retrying a file within a pass
const RETRY_DELAYS_MS = [5_000, 15_000];
// Minimum delays before another pass over the files that still failed, while
// the app stays open (or until it's back online); the last one repeats
const PASS_DELAYS_MS = [30_000, 60_000, 2 * 60_000, 5 * 60_000];
// Spreads out the retries of files that failed together, by adding up to 50%
// to each delay, which is never shortened
const JITTER = 0.5;
// The longest Retry-After a server gets to impose
const MAX_RETRY_AFTER_MS = 10 * 60_000;

// "offline" and "waiting" are between passes, i.e. before the files that
// failed are retried: once back online, or after retryInMs
type OfflinePackStatus =
  { status: "downloading" | "offline" | "finished" } | { status: "waiting"; retryInMs: number };

export type OfflinePackProgress = OfflinePackStatus & {
  // Files downloaded so far
  done: number;
  // Files that can't be downloaded until the next launch, e.g. on a 404
  failed: number;
  total: number;
};

// The manifest's display mode, which a browser tab doesn't report even in
// fullscreen; navigator.standalone covers iOS home screen apps
const standalone = window.matchMedia("(display-mode: standalone)");
const isInstalled = () =>
  standalone.matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;

// Installing from a tab can move that very page into the app window (Chrome
// does), so the display mode may change without a reload
const whenInstalled = (signal: AbortSignal) =>
  new Promise<void>(resolve => {
    if (isInstalled()) return resolve();
    standalone.addEventListener("change", () => standalone.matches && resolve(), { signal });
  });

const cacheFor = (url: string) =>
  new URL(url).origin === location.origin ? ASSETS_CACHE : DICT_CACHE;

// The listeners are removed once done, as the app may stay open for days
const wait = (ms: number, signal: AbortSignal) =>
  new Promise<void>(resolve => {
    const done = () => {
      clearTimeout(timer);
      signal.removeEventListener("abort", done);
      resolve();
    };
    const timer = setTimeout(done, ms);
    signal.addEventListener("abort", done);
  });

const jitter = (ms: number) => ms * (1 + Math.random() * JITTER);

const whenOnline = (signal: AbortSignal) =>
  new Promise<void>(resolve => {
    if (navigator.onLine) return resolve();
    const done = () => {
      window.removeEventListener("online", done);
      signal.removeEventListener("abort", done);
      resolve();
    };
    window.addEventListener("online", done);
    signal.addEventListener("abort", done);
  });

// Either seconds or a date. A cross-origin response (the kuromoji dictionary)
// exposes it only if its server lists it in Access-Control-Expose-Headers.
const parseRetryAfter = (value: string | null) => {
  if (!value) return 0;
  const ms = /^\d+$/.test(value) ? Number(value) * 1000 : Date.parse(value) - Date.now();
  return Number.isFinite(ms) ? Math.min(Math.max(ms, 0), MAX_RETRY_AFTER_MS) : 0;
};

// "retry" for network errors, timeouts, rate limiting and server errors, with
// the delay the server asks for, if any, but not for other errors, e.g. a 404
// for a file that a newer deploy removed
type DownloadResult = { result: "done" | "failed" } | { result: "retry"; retryAfterMs: number };

// A controlled page's request goes through the service worker, which caches
// the response itself; otherwise the page has to, so each file is written once
async function download(url: string): Promise<DownloadResult> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const { status } = response;
      if (status === 429 || status === 503) {
        return {
          result: "retry",
          retryAfterMs: parseRetryAfter(response.headers.get("Retry-After")),
        };
      }
      return { result: status === 408 || status >= 500 ? "retry" : "failed", retryAfterMs: 0 };
    }
    if (navigator.serviceWorker.controller) await response.arrayBuffer();
    else await (await caches.open(cacheFor(url))).put(url, response);
    return { result: "done" };
  } catch {
    // Also when the connection drops mid-download
    return { result: "retry", retryAfterMs: 0 };
  }
}

/**
 * Downloads the files, CONCURRENCY at a time, retrying each one that fails
 * after RETRY_DELAYS_MS. A failed file goes back to the queue, so a worker
 * only waits when every file left in it is waiting for its retry.
 *
 * Returns the files that still failed, for the next pass, and the earliest
 * time it may start (from Retry-After).
 */
async function downloadPass(
  urls: string[],
  signal: AbortSignal,
  onResult: (url: string, result: "done" | "failed") => void,
) {
  const queue = urls.map(url => ({ url, attempt: 0, at: 0 }));
  const failed: string[] = [];
  let notBefore = 0;
  const worker = async () => {
    while (queue.length > 0 && !signal.aborted) {
      // The file due first, so waiting for it holds up no other file
      const next = queue.reduce((first, file) => (file.at < first.at ? file : first));
      queue.splice(queue.indexOf(next), 1);
      // Offline, every attempt would fail at once, so the files waiting for
      // their retry go straight to the next pass
      if (next.attempt > 0 && !navigator.onLine) {
        failed.push(next.url);
        continue;
      }
      if (next.at > Date.now()) await wait(next.at - Date.now(), signal);
      if (signal.aborted) return;

      const outcome = await download(next.url);
      if (outcome.result !== "retry") {
        onResult(next.url, outcome.result);
      } else if (next.attempt === RETRY_DELAYS_MS.length || !navigator.onLine) {
        failed.push(next.url);
        notBefore = Math.max(notBefore, Date.now() + outcome.retryAfterMs);
      } else {
        const delay = Math.max(jitter(RETRY_DELAYS_MS[next.attempt]), outcome.retryAfterMs);
        queue.push({ url: next.url, attempt: next.attempt + 1, at: Date.now() + delay });
      }
    }
  };
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  return { failed, notBefore };
}

// Removes files of previous versions, which are no longer in the pack
async function prune(urls: Set<string>) {
  for (const name of [ASSETS_CACHE, DICT_CACHE]) {
    const cache = await caches.open(name);
    for (const request of await cache.keys()) {
      if (!urls.has(request.url)) await cache.delete(request);
    }
  }
}

/**
 * Keeps the "offline pack" (the library's chunks and the kuromoji dictionary)
 * in sync with the current version. A browser tab only caches the files it
 * uses, while the installed app downloads all of them, so that every language
 * pair works offline. This works whether or not the page is controlled by the
 * service worker, which serves the files from its caches either way.
 *
 * A file that fails is retried a couple of times, then in later passes for as
 * long as the app stays open, and on the next launch if it's still missing.
 * The progress reports when each pass starts and ends.
 *
 * Returns the download progress, or null if nothing needs to be downloaded.
 */
export function useOfflinePack() {
  const [progress, setProgress] = useState<OfflinePackProgress | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("caches" in window)) return;
    const abort = new AbortController();
    const { signal } = abort;

    (async () => {
      await navigator.serviceWorker.ready;
      const { files }: { files: string[] } = await (await fetch(OFFLINE_PACK_URL)).json();
      const urls = new Set(files.map(file => new URL(file, location.href).href));
      await prune(urls);
      await whenInstalled(signal);

      const missing: string[] = [];
      for (const url of urls) {
        if (!(await caches.match(url))) missing.push(url);
      }
      if (missing.length === 0 || signal.aborted) return;

      const total = missing.length;
      let done = 0;
      let failed = 0;
      const report = (status: OfflinePackStatus) => setProgress({ ...status, done, failed, total });
      let pending = missing;
      for (let pass = 0; ; pass++) {
        report({ status: "downloading" });
        const result = await downloadPass(pending, signal, (url, result) => {
          if (result === "done") {
            done++;
            report({ status: "downloading" });
          } else {
            // Stays missing, so it's tried again on the next launch
            failed++;
            console.warn("Offline pack: failed to download", url);
          }
        });
        if (signal.aborted) return;
        pending = result.failed;
        if (pending.length === 0) return report({ status: "finished" });

        if (navigator.onLine) {
          const delay = Math.max(
            jitter(PASS_DELAYS_MS[Math.min(pass, PASS_DELAYS_MS.length - 1)]),
            result.notBefore - Date.now(),
          );
          report({ status: "waiting", retryInMs: delay });
          await wait(delay, signal);
        } else {
          report({ status: "offline" });
          await whenOnline(signal);
        }
        if (signal.aborted) return;
      }
    })().catch(error => console.error("Offline pack:", error));

    return () => abort.abort();
  }, []);

  return progress;
}
