import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "transliterate-any-to-any": path.resolve(__dirname, "../dist/index.mjs"),
    },
    tsconfigPaths: true,
  },
  worker: {
    format: "es",
  },
});
