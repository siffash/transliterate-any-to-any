import { Text } from "types";

export const bgEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgEnRules } = await import("constants/bg-en.rules");

  const transliterator = RBT.fromRules(bgEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
