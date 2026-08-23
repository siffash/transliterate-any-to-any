/// <reference lib="webworker" />

import { Language, transliterate } from "transliterate-any-to-any";

export interface WorkerRequest {
  id: number;
  text: string;
  from: Language;
  to: Language;
}

export type WorkerResponse = { id: number; result: string } | { id: number; error: string };

// Casting `self` sidesteps the TS lib conflict between "DOM" (needed by the
// rest of the app) and "WebWorker" (needed only in this file) — both define
// incompatible global types, and TypeScript doesn't support mixing them in
// one tsconfig. This only affects type-checking; Vite bundles the worker
// correctly either way.
const ctx = self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const { id, text, from, to } = event.data;
  try {
    const result = await transliterate(text, { from, to });
    ctx.postMessage({ id, result } satisfies WorkerResponse);
  } catch (err) {
    console.error(err);
    const message =
      err instanceof Error
        ? err.message !== "{}"
          ? err.message
          : "Transliteration failed."
        : "Transliteration failed.";
    ctx.postMessage({ id, error: message } satisfies WorkerResponse);
  }
};
