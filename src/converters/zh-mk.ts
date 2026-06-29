import { Text } from "types";

export const zhMk = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhMkRules } = await import("constants/zh-mk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhMkRules);

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
