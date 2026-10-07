import { Text } from "types";

export const thEn = async (text: Text) => {
  const { romanize } = await import("@pcampus/thai-romanization");
  const { RBT } = await import("helpers/rbt");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { thEnRules } = await import("data/th/th-en.rules");

  const transliterator = RBT.fromRules(thEnRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "th", text => romanize(text));
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
