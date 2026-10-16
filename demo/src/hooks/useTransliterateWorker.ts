import { useCallback, useEffect, useRef } from "react";
import { Language } from "transliterate-any-to-any";
import type { WorkerRequest, WorkerResponse } from "../workers/transliterate.worker";

export const isLoadError = (message: string) =>
  /dynamically imported module|importing a module script failed|failed to fetch|networkerror|load failed/i.test(
    message,
  );

interface PendingRequest {
  resolve: (value: string) => void;
  reject: (reason: Error) => void;
}

/**
 * Owns a single long-lived transliterate.worker instance and exposes a
 * promise-based `run()` on top of its postMessage protocol. The worker is
 * created on mount and terminated on unmount; each call gets its own request
 * id so responses can be matched back to the right caller even if several
 * requests are in flight at once.
 *
 * A worker remembers a module that failed to load (e.g. while offline) and
 * never fetches it again, so after such a failure it is dropped, and the next
 * request starts a new one. That also covers a worker whose own script failed
 * to load, which never answers at all.
 */
export function useTransliterateWorker() {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<number, PendingRequest>>(new Map());
  const idRef = useRef(0);

  // Terminates the worker and fails the requests still waiting for it
  const drop = useCallback((worker: Worker, error: Error) => {
    if (workerRef.current !== worker) return;
    worker.terminate();
    workerRef.current = null;
    for (const pending of pendingRef.current.values()) pending.reject(error);
    pendingRef.current.clear();
  }, []);

  const start = useCallback(() => {
    const worker = new Worker(new URL("../workers/transliterate.worker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const data = event.data;
      const pending = pendingRef.current.get(data.id);
      if (!pending) return;
      pendingRef.current.delete(data.id);
      if ("error" in data) {
        if (isLoadError(data.error)) drop(worker, new Error(data.error));
        pending.reject(new Error(data.error));
      } else {
        pending.resolve(data.result);
      }
    };

    // A plain Event (unlike the ErrorEvent of an uncaught exception) means the
    // worker's own script failed to load, e.g. offline without a service worker
    worker.onerror = event => {
      if (event instanceof ErrorEvent && event.message) return;
      drop(worker, new Error("Failed to fetch the transliteration worker."));
    };

    workerRef.current = worker;
    return worker;
  }, [drop]);

  useEffect(() => {
    const pendingRequests = pendingRef.current;
    start();
    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
      pendingRequests.clear();
    };
  }, [start]);

  const run = useCallback(
    (text: string, from: Language, to: Language) => {
      return new Promise<string>((resolve, reject) => {
        const worker = workerRef.current ?? start();
        const id = ++idRef.current;
        pendingRef.current.set(id, { resolve, reject });
        const request: WorkerRequest = { id, text, from, to };
        worker.postMessage(request);
      });
    },
    [start],
  );

  return { run };
}
