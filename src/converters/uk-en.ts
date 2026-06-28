import { Text } from "types";

export const ukEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukEnRules } = await import("constants/uk-en.rules");

  const transliterator = RBT.fromRules(ukEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
