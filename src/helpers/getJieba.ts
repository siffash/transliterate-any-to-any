import { isNode, isDeno, isBun } from "browser-or-node";

export type Jieba = {
  cut_for_search(text: string, hmm?: boolean | null): string[];
  tag(text: string, hmm?: boolean | null): { word: string; tag: string }[];
  add_word(word: string, freq?: number | null, tag?: string | null): number;
};

let jiebaPromise: Promise<Jieba> | undefined;

// jieba's Chinese word segmentation (WebAssembly, with its dictionary built in)
export const getJieba = () => {
  jiebaPromise ??= (async (): Promise<Jieba> => {
    if (isNode || isDeno || isBun) {
      const { createRequire } = await import(
        /* @vite-ignore */ /* webpackIgnore: true */ "node:module"
      );
      const require = createRequire(import.meta.url);
      const pkg = "jieba-wasm";
      return require(pkg);
    }
    // The browser build fetches and compiles its .wasm first
    const jieba = await import("jieba-wasm/web");
    await jieba.default();
    return jieba;
  })().catch(e => {
    jiebaPromise = undefined;
    throw e;
  });
  return jiebaPromise;
};
