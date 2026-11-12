import { Text } from "types";

export const zhDe = async (text: Text) => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { RBT } = await import("helpers/rbt");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnRules + latnIRules + latnDeRules);

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
