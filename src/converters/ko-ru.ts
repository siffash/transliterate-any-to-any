import { Text } from "types";

export const koRu = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("icu-transliterator");
  const { koRuRules } = await import("constants/ko-ru.rules");

  const transliterator = RBT.fromRules(koRuRules);

  const convert = (text: string) => {
    const romanized = Aromanize.romanize(text);
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
