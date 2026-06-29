import { Text } from "types";

export const zhMk = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhMkRules } = await import("constants/zh-mk.rules");
  const { splitZh } = await import("helpers/splitZh");

  const transliterator = RBT.fromRules(zhMkRules);

  const convert = (text: string) => {
    const split = splitZh(text);
    const romanized = pinyin(split, { separator: "" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
