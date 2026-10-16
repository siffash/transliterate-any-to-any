# transliterate-any-to-any — demo

A live demo of the `transliterate-any-to-any` library, built with Vite + React + TypeScript + MUI.

## Run locally

```bash
# in the root directory, install & build the library
npm i
npm run build
# then install & run the demo
cd demo
npm i
npm run dev # or npm run build && npm run preview
```

## How it's wired to the library

`vite.config.ts` aliases the import specifier `transliterate-any-to-any` straight to the library's source (`../dist/index.mjs`). Every file in this demo imports the library by that package name.

`transliterate()` itself only ever runs inside `src/workers/transliterate.worker.ts`, called through `src/hooks/useTransliterateWorker.ts` from the main thread.
