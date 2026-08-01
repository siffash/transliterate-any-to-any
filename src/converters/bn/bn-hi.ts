import { Text } from "types";

export const bnHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnHiRules } = await import("constants/bn-hi.rules");

  const transliterator = RBT.fromRules(bnHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
