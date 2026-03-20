import { Text } from "types/languages";

export const anyJa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { anyJaRules } = await import("constants/any-ja.rules");

  const transliterator = RBT.fromRules(anyJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
