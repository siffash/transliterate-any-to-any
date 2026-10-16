import { defineConfig } from "tsdown";
import nodePolyfills from "@rolldown/plugin-node-polyfills";
import { getKuromojiDictUrl } from "./src/helpers/getKuromojiDictUrl.mts";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  target: "es2022",
  platform: "browser",
  shims: true,
  clean: true,
  minify: true,
  define: {
    __KUROMOJI_DICT_URL__: JSON.stringify(getKuromojiDictUrl()),
  },
  deps: {
    alwaysBundle: [
      "aromanize",
      "kuromoji",
      "kuroshiro",
      "kuroshiro-analyzer-kuromoji",
      "zlibjs",
      "fflate",
    ],
  },
  plugins: [
    nodePolyfills(),
    {
      name: "minify-icu-rules",
      transform(code, id) {
        if (!id.endsWith(".rules.ts")) {
          return null;
        }

        const regex = /(export\s+const\s+\w+\s*=\s*)`([^`]*)`/g;

        const minifiedCode = code.replace(regex, (match, declaration, rulesContent) => {
          const minified = rulesContent.replace(/'[^']*'|\s+/g, m => {
            if (m.startsWith("'")) {
              return m; // keep the single-quoted string exactly as is
            }
            return ""; // strip everything else (spaces, tabs, newlines)
          });
          return `${declaration}\`${minified}\``;
        });

        return {
          code: minifiedCode,
          map: null,
        };
      },
    },
  ],
});
