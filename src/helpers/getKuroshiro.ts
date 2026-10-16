let kuroshiroPromise: Promise<any> | undefined;

export const getKuroshiro = () => {
  kuroshiroPromise ??= (async () => {
    const { resolveCjsDefault } = await import("helpers/resolveCjsDefault");
    const Kuroshiro = resolveCjsDefault(await import("kuroshiro"));
    const KuromojiAnalyzer = resolveCjsDefault(await import("kuroshiro-analyzer-kuromoji"));
    const { isNode, isDeno, isBun } = await import("browser-or-node");
    const kuroshiro = new Kuroshiro();
    await kuroshiro.init(
      new KuromojiAnalyzer({
        dictPath: isNode || isDeno || isBun ? undefined : __KUROMOJI_DICT_URL__,
      }),
    );
    return kuroshiro;
  })().catch(e => {
    kuroshiroPromise = undefined;
    throw e;
  });
  return kuroshiroPromise;
};
