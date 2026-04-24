import { Text } from "types/languages";

export const ruBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruBgRules } = await import("constants/ru-bg.rules");

  const transliterator = RBT.fromRules(ruBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
