const fs = require("fs");
const path = require("path");

const fflateShim = `
const fflate = require('fflate');
module.exports = {
  Zlib: {
    Gunzip: class Gunzip {
      constructor(data) { this.data = data; }
      decompress() { return fflate.gunzipSync(this.data); }
    },
    Inflate: class Inflate {
      constructor(data) { this.data = data; }
      decompress() { return fflate.unzlibSync(this.data); }
    }
  }
};
`;

function patchDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.endsWith(".js")) {
      fs.writeFileSync(path.join(dir, file), fflateShim, "utf8");
      console.log("✅ Patched:", path.join(dir, file));
    }
  }
}

// 1. Patch the top-level hoisted version
try {
  const hoisted = require.resolve("zlibjs/bin/gunzip.min.js");
  patchDir(path.dirname(hoisted));
} catch (e) {
  console.error(e);
}

// 2. Patch nested versions just in case npm duplicated them
const nestedDirs = [
  path.join(__dirname, "../../node_modules/kuromoji/node_modules/zlibjs/bin"),
  path.join(__dirname, "../../node_modules/kuroshiro-analyzer-kuromoji/node_modules/zlibjs/bin"),
];

for (const dir of nestedDirs) {
  patchDir(dir);
}
