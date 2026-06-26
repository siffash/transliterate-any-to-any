import { Text } from "types";

export const zhUk = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhUkRules } = await import("constants/zh-uk.rules");

  const transliterator = RBT.fromRules(zhUkRules);

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
