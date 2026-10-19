import type { Plugin, Rolldown } from "vite";

export const OFFLINE_PACK_FILE = "offline-pack.json";

/**
 * Splits the build into the app shell and the "offline pack", i.e. the
 * library's converters and data, which the worker loads on demand through
 * dynamic imports. The shell is everything the app imports, plus what the
 * worker imports statically.
 *
 * The pack is listed in offline-pack.json together with `extraUrls`, so that
 * the installed app can download it for offline use, while a browser tab only
 * fetches the chunks it needs.
 */
export function offlinePack({ extraUrls }: { extraUrls: string[] }) {
  const shell = new Set<string>();
  const pack = new Set<string>();
  let base = "/";

  // Entry chunks and everything they import, with their CSS
  const collectShell = (bundle: Rolldown.OutputBundle, { dynamic }: { dynamic: boolean }) => {
    const visit = (fileName: string) => {
      const chunk = bundle[fileName];
      if (shell.has(fileName) || chunk?.type !== "chunk") return;
      shell.add(fileName);
      chunk.viteMetadata?.importedCss.forEach(css => shell.add(css));
      chunk.imports.forEach(visit);
      if (dynamic) chunk.dynamicImports.forEach(visit);
    };
    Object.values(bundle).forEach(file => {
      if (file.type === "chunk" && file.isEntry) visit(file.fileName);
    });
  };

  // Worker chunks reach the main bundle as plain assets without their
  // imports, so the worker's shell is collected inside its own build.
  const workerPlugin = (): Plugin => ({
    name: "offline-pack:worker",
    apply: "build",
    generateBundle(_options, bundle) {
      collectShell(bundle, { dynamic: false });
      // The entry's hash changes with any library change, so a chunk importing
      // it gets renamed (and re-downloaded) every time, and so do its importers
      const entries = Object.values(bundle).filter(file => file.type === "chunk" && file.isEntry);
      for (const file of Object.values(bundle)) {
        if (file.type !== "chunk" || file.isEntry) continue;
        const imported = entries.filter(entry => file.imports.includes(entry.fileName));
        for (const entry of imported) {
          this.warn(
            `${file.fileName} imports the worker entry ${entry.fileName}, so it changes with every library change. Move the shared code into its own chunk (worker.rolldownOptions in vite.config.ts).`,
          );
        }
      }
    },
  });

  const plugin: Plugin = {
    name: "offline-pack",
    apply: "build",
    configResolved(config) {
      base = config.base;
    },
    // Runs after the worker builds, which happen while the main one transforms
    generateBundle(_options, bundle) {
      // The app's own lazy chunks (e.g. workbox-window) are needed on startup
      collectShell(bundle, { dynamic: true });
      for (const fileName of Object.keys(bundle)) {
        if (/\.(js|css|wasm)$/.test(fileName) && !shell.has(fileName)) pack.add(fileName);
      }
      this.emitFile({
        type: "asset",
        fileName: OFFLINE_PACK_FILE,
        source: JSON.stringify({
          files: [...[...pack].map(fileName => base + fileName), ...extraUrls],
        }),
      });
    },
  };

  return {
    plugin,
    workerPlugin,
    // Whether a file (relative to the output directory) is in the pack
    isInPack: (fileName: string) => pack.has(fileName),
  };
}
