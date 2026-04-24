import { Text } from "types/languages";

export const ruMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruMKRules } = await import("constants/ru-mk.rules");

  const transliterator = RBT.fromRules(ruMKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
