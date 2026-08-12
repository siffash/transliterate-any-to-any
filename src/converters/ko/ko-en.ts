import { Text } from "types";

export const koEn = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt-distributor");
  const { koLatnRules } = await import("constants/ko-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koLatnRules + latnEnRules);

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
