import { Text } from "types";

export const zhEn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhLatnRules } = await import("constants/zh-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnRules + latnEnRules);

  const convert = async (text: string) => {
    const split = wordSplitter(text, "zh");
    const romanized = pinyin(split, { separator: "" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
