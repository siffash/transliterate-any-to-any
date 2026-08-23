import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, "../tsconfig.json")],
    }),
  ],
  base: "/transliterate-any-to-any/",
  resolve: {
    alias: {
      "transliterate-any-to-any": path.resolve(__dirname, "../dist/index.mjs"),
    },
  },
  worker: {
    format: "es",
  },
});
