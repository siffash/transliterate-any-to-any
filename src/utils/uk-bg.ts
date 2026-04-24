import { Text } from "types/languages";

export const ukBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukBgRules } = await import("constants/uk-bg.rules");

  const transliterator = RBT.fromRules(ukBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
