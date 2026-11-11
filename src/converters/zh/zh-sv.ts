import { Text } from "types";

export const zhSv = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("helpers/rbt");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhLatnRules + latnIRules + latnXHRules + latnSvRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "zh", text =>
      pinyin(text, { separator: "'", nonZh: "consecutive" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
