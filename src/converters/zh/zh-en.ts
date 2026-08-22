import { Text } from "types";

export const zhEn = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("helpers/rbt");
  const { zhEnRules } = await import("data/zh/zh-en.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhEnRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "zh", text => pinyin(text, { separator: "" }));
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
