import { Text } from "types";

export const zhBg = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhBgRules } = await import("constants/zh-bg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhBgRules);

  const convert = (text: string) => {
    const split = wordSplitter(text, "zh");
    const romanized = pinyin(split, { separator: "" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
