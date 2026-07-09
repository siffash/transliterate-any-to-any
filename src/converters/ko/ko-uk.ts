import { Text } from "types";

export const koUk = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koUkRules } = await import("constants/ko-uk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koUkRules);

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
