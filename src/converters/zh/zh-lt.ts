import { Text } from "types";

export const zhLt = async (text: Text) => {
  const { zhPinyin } = await import("helpers/zhPinyin");
  const { RBT } = await import("helpers/rbt");
  const { zhLatnLtRules } = await import("data/zh/zh-latn_lt.rules");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(
    zhLatnLtRules + zhLatnRules + latnIRules + latnXHRules + latnLtRules,
  );

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
