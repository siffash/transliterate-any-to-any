const fs = require("fs");
const path = require("path");

const ANCHOR = 'var path = require("path");';
const MARKER = "function joinDicPath(";
const NEEDLE = "path.join(dic_path,";
const REPLACEMENT = "joinDicPath(dic_path,";

const HELPER = `
function joinDicPath(dic_path, filename) {
    if (new RegExp("^https?://", "i").test(dic_path)) {
        return dic_path.replace(new RegExp("/+$"), "") + "/" + filename.replace(new RegExp("^/+"), "");
    }
    return path.join(dic_path, filename);
}
`;

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
      const target = path.join(entryPath, "src", "loader", "DictionaryLoader.js");
      if (fs.existsSync(target)) found.push(target);
    }

    const nested = path.join(entryPath, "node_modules");
    if (fs.existsSync(nested)) {
      findDictionaryLoaders(nested, found, depth + 1);
    }
  }
}

function patch(filePath) {
  const original = fs.readFileSync(filePath, "utf8");

  if (original.includes(MARKER)) {
    console.log("✅ Patched kuromoji:", filePath);
    return "already-patched";
  }

  if (!original.includes(ANCHOR) || !original.includes(NEEDLE)) {
    console.error("❌ Not patched kuromoji:", filePath);
    console.error(`Could not find expected code in ${filePath}.`);
    return "no-match";
  }

  const withCallsFixed = original.replaceAll(NEEDLE, REPLACEMENT);
  const patched = withCallsFixed.replace(ANCHOR, ANCHOR + "\n" + HELPER);

  fs.writeFileSync(filePath, patched, "utf8");
  console.log("✅ Patched kuromoji:", filePath);
  return "patched";
}

function main() {
  const nodeModulesDir = path.join(process.cwd(), "node_modules");
  const found = [];
  findDictionaryLoaders(nodeModulesDir, found, 0);

  if (found.length === 0) {
    console.error("❌ Not patched kuromoji: /node_modules/kuromoji/src/loader/DictionaryLoader.js");
    console.error(
      "No kuromoji/src/loader/DictionaryLoader.js found under node_modules. Is kuromoji installed?",
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
