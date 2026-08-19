import { Text } from "types";

export const jaMk = async (text: Text) => {
  const { resolveCjsDefault } = await import("helpers/resolveCjsDefault");
  const Kuroshiro = resolveCjsDefault(await import("kuroshiro"));
  const KuromojiAnalyzer = resolveCjsDefault(await import("kuroshiro-analyzer-kuromoji"));
  const { isNode, isDeno, isBun } = await import("browser-or-node");
  const { RBT } = await import("helpers/rbt-distributor");
  const { jaMkRules } = await import("data/ja/ja-mk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(
    new KuromojiAnalyzer({
      dictPath:
        isNode || isDeno || isBun ? undefined : "https://cdn.jsdelivr.net/npm/kuromoji@0.1.2/dict/",
    }),
  );

  const transliterator = RBT.fromRules(jaMkRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(
      text,
      "ja",
      async text => await kuroshiro.convert(text, { to: "romaji" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
