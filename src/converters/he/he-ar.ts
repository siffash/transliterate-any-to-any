import { Text } from "types";

export const heAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { heArRules } = await import("constants/he-ar.rules");

  const transliterator = RBT.fromRules(heArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
