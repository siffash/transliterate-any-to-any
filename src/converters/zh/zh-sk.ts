import { Text } from "types";

export const zhSk = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("helpers/rbt");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnRules + latnSkRules);

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
