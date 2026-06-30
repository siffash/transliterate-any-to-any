import { Text } from "types";

export const arHe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arHeRules } = await import("constants/ar-he.rules");

  const transliterator = RBT.fromRules(arHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
