import { useEffect, useState } from "react";

const OFFLINE_PACK_URL = "/offline-pack.json";
const ASSETS_CACHE = "assets";
const DICT_CACHE = "kuromoji-dict";
const CONCURRENCY = 6;
const RETRY_DELAYS_MS = [5_000, 15_000];
const PASS_DELAYS_MS = [30_000, 60_000, 2 * 60_000, 5 * 60_000];
const JITTER = 0.5;
const MAX_RETRY_AFTER_MS = 10 * 60_000;

type OfflinePackStatus =
  { status: "downloading" | "offline" | "finished" } | { status: "waiting"; retryInMs: number };

export type OfflinePackProgress = OfflinePackStatus & {
  done: number;
  failed: number;
  total: number;
};

const standalone = window.matchMedia("(display-mode: standalone)");
const isInstalled = () =>
  standalone.matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;

const whenInstalled = (signal: AbortSignal) =>
  new Promise<void>(resolve => {
    if (isInstalled()) return resolve();
    standalone.addEventListener("change", () => standalone.matches && resolve(), { signal });
  });

const cacheFor = (url: string) =>
  new URL(url).origin === location.origin ? ASSETS_CACHE : DICT_CACHE;

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

const parseRetryAfter = (value: string | null) => {
  if (!value) return 0;
  const ms = /^\d+$/.test(value) ? Number(value) * 1000 : Date.parse(value) - Date.now();
  return Number.isFinite(ms) ? Math.min(Math.max(ms, 0), MAX_RETRY_AFTER_MS) : 0;
};

type DownloadResult = { result: "done" | "failed" } | { result: "retry"; retryAfterMs: number };

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
    return { result: "retry", retryAfterMs: 0 };
  }
}

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
      const next = queue.reduce((first, file) => (file.at < first.at ? file : first));
      queue.splice(queue.indexOf(next), 1);
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

async function prune(urls: Set<string>) {
  for (const name of [ASSETS_CACHE, DICT_CACHE]) {
    const cache = await caches.open(name);
    for (const request of await cache.keys()) {
      if (!urls.has(request.url)) await cache.delete(request);
    }
  }
}

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
