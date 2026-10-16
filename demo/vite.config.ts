import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import { minimal2023Preset } from "@vite-pwa/assets-generator/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getKuromojiDictFiles, getKuromojiDictUrl } from "../src/helpers/getKuromojiDictUrl.mts";
import { OFFLINE_PACK_FILE, offlinePack } from "./offlinePack.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const KUROMOJI_DICT_URL = getKuromojiDictUrl();
const KUROMOJI_DICT_FILES = getKuromojiDictFiles();
const KUROMOJI_DICT_PATTERN = new RegExp(
  `^${KUROMOJI_DICT_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
);

// The library's chunks and the kuromoji dictionary are downloaded only when
// the app runs installed (see src/hooks/useOfflinePack.ts)
const pack = offlinePack({ extraUrls: KUROMOJI_DICT_FILES.map(file => KUROMOJI_DICT_URL + file) });

const ICON_BACKGROUND = { resizeOptions: { background: "#D9AE4F" } };

export default defineConfig({
  plugins: [
    react({ compiler: true }),
    pack.plugin,
    VitePWA({
      registerType: "prompt",
      injectRegister: false,
      pwaAssets: {
        image: "public/favicon.svg",
        preset: {
          ...minimal2023Preset,
          maskable: { ...minimal2023Preset.maskable, ...ICON_BACKGROUND },
          apple: { ...minimal2023Preset.apple, ...ICON_BACKGROUND },
        },
        overrideManifestIcons: true,
      },
      manifest: {
        name: "transliterate-any-to-any",
        short_name: "transliterate-any-to-any",
        description:
          "Playground for transliterate-any-to-any — JS library for transliterations between 52 languages",
        theme_color: "#121017",
        background_color: "#121017",
        display: "standalone",
        start_url: "/",
        scope: "/",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}", OFFLINE_PACK_FILE],
        globIgnores: ["google*.html"],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/google[0-9a-f]+\.html$/],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        // Only the app shell is precached
        manifestTransforms: [
          async entries => ({ manifest: entries.filter(entry => !pack.isInPack(entry.url)) }),
        ],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === "https://fonts.googleapis.com",
            handler: "StaleWhileRevalidate",
            options: { cacheName: "google-fonts-stylesheets" },
          },
          {
            urlPattern: ({ url }) => url.origin === "https://fonts.gstatic.com",
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts",
              cacheableResponse: { statuses: [0, 200] },
              expiration: { maxAgeSeconds: 60 * 60 * 24 * 365, maxEntries: 30 },
            },
          },
          {
            // The file names are content-hashed, so a cached file never goes stale
            urlPattern: ({ url, sameOrigin }) => sameOrigin && url.pathname.startsWith("/assets/"),
            handler: "CacheFirst",
            options: {
              cacheName: "assets",
              cacheableResponse: { statuses: [200] },
              // Files downloaded by useOfflinePack are requested without the Origin
              // header that module imports send, while servers may vary on it
              matchOptions: { ignoreVary: true },
            },
          },
          {
            urlPattern: KUROMOJI_DICT_PATTERN,
            handler: "CacheFirst",
            options: {
              cacheName: "kuromoji-dict",
              cacheableResponse: { statuses: [200] },
              matchOptions: { ignoreVary: true },
            },
          },
        ],
      },
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "transliterate-any-to-any": path.resolve(__dirname, "../dist/index.mjs"),
    },
    tsconfigPaths: true,
  },
  worker: {
    format: "es",
    plugins: () => [pack.workerPlugin()],
    rolldownOptions: {
      output: {
        // The worker entry chunk lists every converter's file name, so its hash
        // changes with any library change. Bundled into it, the library's
        // constants would make the ~500 chunks that use them import the entry,
        // and so get renamed (and re-downloaded) on every library change.
        codeSplitting: {
          groups: [{ name: "constants", test: /[\\/]dist[\\/]constants-[^\\/]+\.mjs$/ }],
        },
      },
    },
  },
});
