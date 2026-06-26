import { Text } from "types";

export const zhRu = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhRuRules } = await import("constants/zh-ru.rules");

  const transliterator = RBT.fromRules(zhRuRules);

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
