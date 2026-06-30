import { Text } from "types";

export const koUk = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koUkRules } = await import("constants/ko-uk.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koUkRules);

  const convert = (text: string) => {
    const split = wordSplitter(text, "ko");
    const romanized = Aromanize.romanize(split);
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
