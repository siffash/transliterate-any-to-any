import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");

const findKuromoji = () => {
  const lock = JSON.parse(fs.readFileSync(path.join(ROOT, "package-lock.json"), "utf8"));
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

export function getKuromojiDictUrl(): string {
  return `https://cdn.jsdelivr.net/npm/kuromoji@${findKuromoji().version}/dict/`;
}

export function getKuromojiDictDir(): string {
  return path.join(findKuromoji().dir, "dict");
}

export function getKuromojiDictFiles(): string[] {
  return fs
    .readdirSync(getKuromojiDictDir())
    .filter(file => file.endsWith(".dat.gz"))
    .sort();
}
