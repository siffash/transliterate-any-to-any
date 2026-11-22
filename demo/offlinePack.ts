import type { Plugin, Rolldown } from "vite";

export const OFFLINE_PACK_FILE = "offline-pack.json";

export function offlinePack({ extraUrls }: { extraUrls: string[] }) {
  const shell = new Set<string>();
  const pack = new Set<string>();
  let base = "/";

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

  const workerPlugin = (): Plugin => ({
    name: "offline-pack:worker",
    apply: "build",
    generateBundle(_options, bundle) {
      collectShell(bundle, { dynamic: false });
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
    generateBundle(_options, bundle) {
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
    isInPack: (fileName: string) => pack.has(fileName),
  };
}
