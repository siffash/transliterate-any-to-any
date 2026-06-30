import { Text } from "types";

export const jaRu = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { RBT } = await import("icu-transliterator");
  const { jaRuRules } = await import("constants/ja-ru.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());

  const transliterator = RBT.fromRules(jaRuRules);

  const convert = async (text: string) => {
    const split = wordSplitter(text, "ja");
    const romanized = await kuroshiro.convert(split, { to: "romaji" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
