import { Text } from "types";

export const zhCs = async (text: Text) => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { RBT } = await import("helpers/rbt");
  const { zhCsRules } = await import("data/zh/zh-cs.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhCsRules);

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
