import { Text } from "types";

export const zhRu = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhRuRules } = await import("constants/zh-ru.rules");
  const { splitZh } = await import("helpers/splitZh");

  const transliterator = RBT.fromRules(zhRuRules);

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
