import { useEffect, useState } from "react";

// Listed at build time by ../../offlinePack.ts and precached with the app shell
const OFFLINE_PACK_URL = "/offline-pack.json";
// The runtime caches the service worker serves the pack's files from (see
// ../../vite.config.ts): the app's own assets and the kuromoji dictionary
const ASSETS_CACHE = "assets";
const DICT_CACHE = "kuromoji-dict";
const CONCURRENCY = 6;

export interface OfflinePackProgress {
  done: number;
  failed: number;
  total: number;
}

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

// A controlled page's request goes through the service worker, which caches
// the response itself; otherwise the page has to, so each file is written once
const download = (url: string): Promise<boolean> =>
  navigator.serviceWorker.controller
    ? fetch(url).then(response => response.arrayBuffer().then(() => response.ok))
    : caches
        .open(cacheFor(url))
        .then(cache => cache.add(url))
        .then(() => true);

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
 * Returns the download progress, or null if nothing needs to be downloaded.
 */
export function useOfflinePack() {
  const [progress, setProgress] = useState<OfflinePackProgress | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("caches" in window)) return;
    let cancelled = false;
    const abort = new AbortController();

    (async () => {
      await navigator.serviceWorker.ready;
      const { files }: { files: string[] } = await (await fetch(OFFLINE_PACK_URL)).json();
      const urls = new Set(files.map(file => new URL(file, location.href).href));
      await prune(urls);
      await whenInstalled(abort.signal);

      const missing: string[] = [];
      for (const url of urls) {
        if (!(await caches.match(url))) missing.push(url);
      }
      if (missing.length === 0 || cancelled) return;

      const total = missing.length;
      let done = 0;
      let failed = 0;
      setProgress({ done, failed, total });
      const worker = async () => {
        for (let url = missing.pop(); url && !cancelled; url = missing.pop()) {
          // A failed file is retried on the next launch, since it stays missing
          const ok = await download(url).catch(() => false);
          if (!ok) failed++;
          setProgress({ done: ++done, failed, total });
        }
      };
      await Promise.all(Array.from({ length: CONCURRENCY }, worker));
    })().catch(error => console.error("Offline pack:", error));

    return () => {
      cancelled = true;
      abort.abort();
    };
  }, []);

  return progress;
}
