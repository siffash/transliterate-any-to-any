import { Text } from "types";

export const zhHu = async (text: Text) => {
  const { pinyin } = await import("pinyin-pro");
  const { RBT } = await import("helpers/rbt");
  const { zhHuRules } = await import("data/zh/zh-hu.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(zhHuRules);

  // Hungarian writes a place as one word (Tiencsin) and hyphenates a given name (Hszi Csin-ping)
  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "zh", (text, givenName) =>
      pinyin(text, { separator: givenName ? "‧" : "'", nonZh: "consecutive" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
