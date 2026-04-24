import { Text } from "types/languages";

export const mkUk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mkUkRules } = await import("constants/mk-uk.rules");

  const transliterator = RBT.fromRules(mkUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
