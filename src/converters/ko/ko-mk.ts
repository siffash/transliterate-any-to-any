import { Text } from "types";

export const koMk = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koMkRules } = await import("constants/ko-mk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koMkRules);

  const convert = async (text: string) => {
    const split = await wordSplitter(text, "ko", text => Aromanize.romanize(text));
    return transliterator.transliterate(split);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
