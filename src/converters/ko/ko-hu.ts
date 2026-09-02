import { Text } from "types";

export const koHu = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koLatnRules + latnHuRules);

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "ko", text => Aromanize.romanize(text));
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
