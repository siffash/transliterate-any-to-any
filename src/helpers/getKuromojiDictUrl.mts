import fs from "node:fs";
import path from "node:path";

// Build-time helpers for the kuromoji dictionary, which the browser fetches
// from jsDelivr (see getKuroshiro.ts). Both are based on the kuromoji locked
// in package-lock.json, so that the dictionary matches the bundled code.

const ROOT = path.resolve(import.meta.dirname, "../..");

const findKuromoji = () => {
  const lock = JSON.parse(fs.readFileSync(path.join(ROOT, "package-lock.json"), "utf8"));
  // Prefer a copy nested under the analyzer, since that's the one it loads
  const key = [
    "node_modules/kuroshiro-analyzer-kuromoji/node_modules/kuromoji",
    "node_modules/kuromoji",
  ].find(key => lock.packages[key]);
  const version: string | undefined = key && lock.packages[key].version;
  if (!key || !version) {
    throw new Error("kuromoji not found in package-lock.json");
  }
  return { dir: path.join(ROOT, key), version };
};

// Injected into the library as __KUROMOJI_DICT_URL__
export function getKuromojiDictUrl(): string {
  return `https://cdn.jsdelivr.net/npm/kuromoji@${findKuromoji().version}/dict/`;
}

// The directory of the dictionary, which the demo's mobile app bundles
export function getKuromojiDictDir(): string {
  return path.join(findKuromoji().dir, "dict");
}

// The dictionary files, which the demo precaches for offline use
export function getKuromojiDictFiles(): string[] {
  return fs
    .readdirSync(getKuromojiDictDir())
    .filter(file => file.endsWith(".dat.gz"))
    .sort();
}
