import { Text } from "types";

export const zhLv = async (text: Text) => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { RBT } = await import("helpers/rbt");
  const { zhLvRules } = await import("data/zh/zh-lv.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLvRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "zh", text => zhPinyin(text));
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
