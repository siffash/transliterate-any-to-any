import { Text } from "types";

export const hiEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hiEnRules } = await import("constants/hi-en.rules");

  const transliterator = RBT.fromRules(hiEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
