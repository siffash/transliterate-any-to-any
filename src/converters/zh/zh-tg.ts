import { Text } from "types";

export const zhTg = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("helpers/rbt");
  const { zhTgRules } = await import("data/zh/zh-tg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhTgRules);

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
