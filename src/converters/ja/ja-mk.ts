import { Text } from "types";

export const jaMk = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { RBT } = await import("helpers/rbt-distributor");
  const { jaMkRules } = await import("constants/ja-mk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

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
