import { Text } from "types";

export const faAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { faArRules } = await import("constants/fa-ar.rules");

  const transliterator = RBT.fromRules(faArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
