import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getKuromojiDictDir,
  getKuromojiDictFiles,
  getKuromojiDictUrl,
} from "../src/helpers/getKuromojiDictUrl.mts";

// The web part of the Android/iOS app (see capacitor.config.ts). Unlike the
// PWA, it has no service worker nor offline pack: the app ships every file.

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const KUROMOJI_DICT_URL = getKuromojiDictUrl();
// Served by the app itself; kuromoji fetches the files relative to the origin
const LOCAL_DICT_PATH = "/kuromoji-dict/";
const DICT_FILES = getKuromojiDictFiles();
// The app has the dictionary's .gz files as .gzip: Android's build unzips every
// asset named *.gz and drops the extension, while kuromoji unzips them itself
const localDictFile = (file: string) => file.replace(/\.gz$/, ".gzip");
// The file names in kuromoji's loader, in any quotes
const DICT_FILE_NAMES = new RegExp(
  `(["'\`])(${DICT_FILES.map(file => file.replaceAll(".", "\\.")).join("|")})\\1`,
  "g",
);

// Makes kuromoji (in the worker) load the dictionary bundled with the app
// instead of the one on jsDelivr, so that Japanese works offline
const localKuromojiDict = (): Plugin => {
  let urlFound = false;
  const filesFound = new Set<string>();
  return {
    name: "local-kuromoji-dict",
    apply: "build",
    transform(code) {
      let result = code;
      if (result.includes(KUROMOJI_DICT_URL)) {
        urlFound = true;
        result = result.replaceAll(KUROMOJI_DICT_URL, LOCAL_DICT_PATH);
      }
      result = result.replace(DICT_FILE_NAMES, (_, quote: string, file: string) => {
        filesFound.add(file);
        return quote + localDictFile(file) + quote;
      });
      return result === code ? null : { code: result, map: null };
    },
    generateBundle() {
      if (!urlFound) {
        this.error(
          `${KUROMOJI_DICT_URL} isn't in the library anymore, so the app can't point kuromoji at its own copy of the dictionary.`,
        );
      }
      const missing = DICT_FILES.filter(file => !filesFound.has(file)).join(", ");
      if (missing) {
        this.error(
          `kuromoji doesn't load ${missing} by name anymore, so the app can't rename its copy of the dictionary.`,
        );
      }
    },
  };
};

// Adds the dictionary files to the app
const emitKuromojiDict = (): Plugin => ({
  name: "emit-kuromoji-dict",
  apply: "build",
  generateBundle() {
    for (const file of DICT_FILES) {
      this.emitFile({
        type: "asset",
        fileName: LOCAL_DICT_PATH.slice(1) + localDictFile(file),
        source: fs.readFileSync(path.join(getKuromojiDictDir(), file)),
      });
    }
  },
});

export default defineConfig({
  root: path.resolve(__dirname, "mobile"),
  base: "/",
  publicDir: false,
  // Apart from the PWA's, as both dev servers may run at once
  cacheDir: path.resolve(__dirname, "node_modules/.vite-mobile"),
  plugins: [react({ compiler: true }), emitKuromojiDict()],
  resolve: {
    alias: {
      "transliterate-any-to-any": path.resolve(__dirname, "../dist/index.mjs"),
    },
    tsconfigPaths: true,
  },
  optimizeDeps: {
    entries: ["index.html"],
  },
  worker: {
    format: "es",
    plugins: () => [localKuromojiDict()],
  },
  build: {
    outDir: path.resolve(__dirname, "dist-mobile"),
    emptyOutDir: true,
  },
});
