import { Text } from "types";

export const zhBs = async (text: Text) => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { RBT } = await import("helpers/rbt");
  const { zhLatnGlideRules } = await import("data/zh/zh-latn_glide.rules");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnGlideRules + zhLatnRules + latnBsRules);

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
