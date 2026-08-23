const fs = require("fs");
const path = require("path");

const TARGET_PATH = path.resolve(__dirname, "../../node_modules/aromanize/aromanize.js");

if (!fs.existsSync(TARGET_PATH)) {
  console.error("❌ Not patched:", TARGET_PATH);
  console.error(`File not find: ${TARGET_PATH}`);
  process.exit(1);
}

const original = fs.readFileSync(TARGET_PATH, "utf8");

if (/\bvar nextIdx\b/.test(original)) {
  console.log("✅ Patched:", TARGET_PATH);
  return;
}

const targetLineRe = /^([ \t]*)var rom = (['"])\2;[ \t]*\r?\n/m;
const match = targetLineRe.exec(original);

if (!match) {
  console.error("❌ Not patched:", TARGET_PATH);
  console.error(`Could not find "var rom = '';" in ${TARGET_PATH}`);
  process.exit(1);
}

const indent = match[1];
const insertion = `${indent}var nextIdx;\n`;
const insertAt = match.index + match[0].length;
const patched = original.slice(0, insertAt) + insertion + original.slice(insertAt);

fs.writeFileSync(TARGET_PATH, patched, "utf8");
console.log("✅ Patched:", TARGET_PATH);
