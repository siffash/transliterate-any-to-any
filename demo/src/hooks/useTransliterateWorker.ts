import { useCallback, useEffect, useRef } from "react";
import { Language, Spelling } from "transliterate-any-to-any";
import type { WorkerRequest, WorkerResponse } from "../workers/transliterate.worker";

export const isLoadError = (message: string) =>
  /dynamically imported module|importing a module script failed|failed to fetch|networkerror|load failed/i.test(
    message,
  );

interface PendingRequest {
  resolve: (value: string) => void;
  reject: (reason: Error) => void;
}

export function useTransliterateWorker() {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<number, PendingRequest>>(new Map());
  const idRef = useRef(0);

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
    (text: string, from: Language | undefined, to: Language, spelling: Spelling) => {
      return new Promise<string>((resolve, reject) => {
        const worker = workerRef.current ?? start();
        const id = ++idRef.current;
        pendingRef.current.set(id, { resolve, reject });
        const request: WorkerRequest = { id, text, from, to, spelling };
        worker.postMessage(request);
      });
    },
    [start],
  );

  return { run };
}
