import { Text } from "types";

export const koRu = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koRuRules } = await import("constants/ko-ru.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(koRuRules);

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
