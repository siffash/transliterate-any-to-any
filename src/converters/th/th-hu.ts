import { Text } from "types";

export const thHu = async (text: Text) => {
  const { romanize } = await import("@pcampus/thai-romanization");
  const { RBT } = await import("helpers/rbt");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(thLatnRules + latnHuRules + "::Title;");

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
