import { Text } from "types";

export const jaFr = async (text: Text) => {
  const { default: Kuroshiro } = await import("kuroshiro");
  const { default: KuromojiAnalyzer } = await import("kuroshiro-analyzer-kuromoji");
  const { RBT } = await import("icu-transliterator");
  const { jaLatnRules } = await import("constants/ja-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const kuroshiro = new Kuroshiro();
  await kuroshiro.init(new KuromojiAnalyzer());
  const transliterator = RBT.fromRules(jaLatnRules + latnFrRules);

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
