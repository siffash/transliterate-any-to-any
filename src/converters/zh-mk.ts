import { Text } from "types";

export const zhMk = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhMkRules } = await import("constants/zh-mk.rules");

  const transliterator = RBT.fromRules(zhMkRules);

  const convert = (text: string) => {
    const romanized = pinyin(text, { separator: "" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
