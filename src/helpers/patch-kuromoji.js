const fs = require("fs");
const path = require("path");

const PATH_HELPER = `
function joinDicPath(dic_path, filename) {
    if (new RegExp("^https?://", "i").test(dic_path)) {
        return dic_path.replace(new RegExp("/+$"), "") + "/" + filename.replace(new RegExp("^/+"), "");
    }
    return path.join(dic_path, filename);
}
`;

const READ_HELPER = `
function readFileLazy(file, callback) {
    var spec = "node:fs";
    import(/* @vite-ignore */ spec).then(
        function (m) { (m.default || m).readFile(file, callback); },
        callback
    );
}
`;

const PATCHES = {
  "DictionaryLoader.js": {
    anchor: 'var path = require("path");',
    marker: "function joinDicPath(",
    needle: "path.join(dic_path,",
    replacement: "joinDicPath(dic_path,",
    helper: PATH_HELPER,
  },
  "NodeDictionaryLoader.js": {
    anchor: 'var fs = require("fs");',
    marker: "function readFileLazy(",
    needle: "fs.readFile(",
    replacement: "readFileLazy(",
    helper: READ_HELPER,
  },
  "BrowserDictionaryLoader.js": {
    anchor: 'var zlib = require("zlibjs/bin/gunzip.min.js");',
    marker: "function readFileLazy(",
    needle: "BrowserDictionaryLoader.prototype.loadArrayBuffer = function (url, callback) {",
    replacement: `BrowserDictionaryLoader.prototype.loadArrayBuffer = function (url, callback) {
    if (typeof XMLHttpRequest === "undefined") {
        return readFileLazy(url, function (err, buf) {
            if (err) return callback(err, null);
            try {
                callback(null, new zlib.Zlib.Gunzip(new Uint8Array(buf)).decompress().buffer);
            } catch (e) {
                callback(e, null);
            }
        });
    }`,
    helper: READ_HELPER,
  },
};

function findDictionaryLoaders(nodeModulesDir, found, depth) {
  if (depth > 8 || !fs.existsSync(nodeModulesDir)) return;

  let entries;
  try {
    entries = fs.readdirSync(nodeModulesDir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const entryPath = path.join(nodeModulesDir, entry.name);

    let isDir;
    try {
      isDir = fs.statSync(entryPath).isDirectory();
    } catch {
      continue;
    }
    if (!isDir) continue;

    if (entry.name.startsWith("@")) {
      findDictionaryLoaders(entryPath, found, depth);
      continue;
    }

    if (entry.name === "kuromoji") {
      for (const name of Object.keys(PATCHES)) {
        const target = path.join(entryPath, "src", "loader", name);
        if (fs.existsSync(target)) found.push(target);
      }
    }

    const nested = path.join(entryPath, "node_modules");
    if (fs.existsSync(nested)) {
      findDictionaryLoaders(nested, found, depth + 1);
    }
  }
}

function patch(filePath) {
  const { anchor, marker, needle, replacement, helper } = PATCHES[path.basename(filePath)];
  const original = fs.readFileSync(filePath, "utf8");

  if (original.includes(marker)) {
    console.log("✅ Patched kuromoji:", filePath);
    return "already-patched";
  }

  if (!original.includes(anchor) || !original.includes(needle)) {
    console.error("❌ Not patched kuromoji:", filePath);
    console.error(`Could not find expected code in ${filePath}.`);
    return "no-match";
  }

  const withCallsFixed = original.replaceAll(needle, replacement);
  const patched = withCallsFixed.replace(anchor, anchor + "\n" + helper);

  fs.writeFileSync(filePath, patched, "utf8");
  console.log("✅ Patched kuromoji:", filePath);
  return "patched";
}

function main() {
  const nodeModulesDir = path.join(process.cwd(), "node_modules");
  const found = [];
  findDictionaryLoaders(nodeModulesDir, found, 0);

  if (found.length === 0) {
    console.error(
      "❌ Not patched kuromoji: no loader files found under node_modules. Is kuromoji installed?",
    );
    process.exit(1);
  }

  const results = found.map(patch);

  if (results.includes("no-match")) {
    process.exit(1);
  }

  const patchedCount = results.filter(r => r === "patched").length;
  const skippedCount = results.filter(r => r === "already-patched").length;
  console.log(
    `✅ Patched kuromoji: ${patchedCount} patched, ${skippedCount} already patched, ${found.length} total.`,
  );
}

main();
