/// <reference lib="webworker" />

import { Language, Spelling, transliterate } from "transliterate-any-to-any";

export interface WorkerRequest {
  id: number;
  text: string;
  from?: Language;
  to: Language;
  spelling: Spelling;
}

export type WorkerResponse = { id: number; result: string } | { id: number; error: string };

const ctx = self as unknown as DedicatedWorkerGlobalScope;

ctx.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const { id, text, from, to, spelling } = event.data;
  try {
    const result = await transliterate(text, { from, to, spelling });
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
