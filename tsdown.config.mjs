import { defineConfig } from "tsdown";
import nodePolyfills from "@rolldown/plugin-node-polyfills";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  target: "es2022",
  platform: "browser",
  shims: true,
  clean: true,
  minify: true,
  deps: {
    alwaysBundle: ["kuromoji", "kuroshiro", "kuroshiro-analyzer-kuromoji", "zlibjs", "fflate"],
  },
  plugins: [nodePolyfills()],
});
