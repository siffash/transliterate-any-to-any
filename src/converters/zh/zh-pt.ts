import { Text } from "types";

export const zhPt = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("icu-transliterator");
  const { zhLatnRules } = await import("constants/zh-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnRules + latnPtRules);

  const convert = async (text: string) => {
    const split = wordSplitter(text, "zh");
    const romanized = pinyin(split, { separator: "" });
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
