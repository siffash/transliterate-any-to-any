import { defineConfig } from "vitest/config";
import { getKuromojiDictUrl } from "./src/helpers/getKuromojiDictUrl.mts";

export default defineConfig({
  define: {
    __KUROMOJI_DICT_URL__: JSON.stringify(getKuromojiDictUrl()),
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    testTimeout: 50000,
    hookTimeout: 50000,
  },
});
