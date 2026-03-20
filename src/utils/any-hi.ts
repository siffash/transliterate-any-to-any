import { Text } from "types/languages";

export const anyHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { anyHiRules } = await import("constants/any-hi.rules");

  const transliterator = RBT.fromRules(anyHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
