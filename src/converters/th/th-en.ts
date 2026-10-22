import { Text } from "types";

export const thEn = async (text: Text) => {
  const { thRtgs } = await import("converters/th/th-ipa");
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");
  const { thEnRules } = await import("data/th/th-en.rules");

  const toRtgs = await thRtgs();
  const transliterator = RBT.fromRules(thEnRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(normalizeTh(text), "th", text =>
      text.replace(/[^๐-๙]+/g, part => toRtgs(part)),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
