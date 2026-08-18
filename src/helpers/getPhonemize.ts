import { isNode, isDeno, isBun } from "browser-or-node";

export const getPhonemize = async (): Promise<typeof import("phonemize")> => {
  if (isNode || isDeno || isBun) {
    const { createRequire } = await import(
      /* @vite-ignore */ /* webpackIgnore: true */ "node:module"
    );
    const require = createRequire(import.meta.url);
    const pkg = "phonemize";
    return require(pkg);
  } else {
    return await import("phonemize");
  }
};

export const getPhonemizeAll = async (): Promise<typeof import("phonemize/all")> => {
  if (isNode || isDeno || isBun) {
    const { createRequire } = await import(
      /* @vite-ignore */ /* webpackIgnore: true */ "node:module"
    );
    const require = createRequire(import.meta.url);
    const pkg = "phonemize/all";
    return require(pkg);
  } else {
    return await import("phonemize/all");
  }
};
