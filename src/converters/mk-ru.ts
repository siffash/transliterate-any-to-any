import { Text } from "types";

export const mkRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkRuRules } = await import("constants/mk-ru.rules");

  const transliterator = RBT.fromRules(mkRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
