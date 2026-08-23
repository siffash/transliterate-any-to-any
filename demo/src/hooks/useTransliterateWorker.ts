import { useCallback, useEffect, useRef } from "react";
import { Language } from "transliterate-any-to-any";
import type { WorkerRequest, WorkerResponse } from "../workers/transliterate.worker";

interface PendingRequest {
  resolve: (value: string) => void;
  reject: (reason: Error) => void;
}

/**
 * Owns a single long-lived transliterate.worker instance and exposes a
 * promise-based `run()` on top of its postMessage protocol. One worker is
 * created per mount and terminated on unmount; each call gets its own
 * request id so responses can be matched back to the right caller even if
 * several requests are in flight at once.
 */
export function useTransliterateWorker() {
  const workerRef = useRef<Worker | null>(null);
  const pendingRef = useRef<Map<number, PendingRequest>>(new Map());
  const idRef = useRef(0);

  useEffect(() => {
    const worker = new Worker(new URL("../workers/transliterate.worker.ts", import.meta.url), {
      type: "module",
    });

    worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const data = event.data;
      const pending = pendingRef.current.get(data.id);
      if (!pending) return;
      pendingRef.current.delete(data.id);
      if ("error" in data) {
        pending.reject(new Error(data.error));
      } else {
        pending.resolve(data.result);
      }
    };

    workerRef.current = worker;
    return () => {
      worker.terminate();
      workerRef.current = null;
      pendingRef.current.clear();
    };
  }, []);

  const run = useCallback((text: string, from: Language, to: Language) => {
    return new Promise<string>((resolve, reject) => {
      const worker = workerRef.current;
      if (!worker) {
        reject(new Error("Worker not ready yet."));
        return;
      }
      const id = ++idRef.current;
      pendingRef.current.set(id, { resolve, reject });
      const request: WorkerRequest = { id, text, from, to };
      worker.postMessage(request);
    });
  }, []);

  return { run };
}
