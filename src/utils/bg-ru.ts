import { Text } from "types/languages";

export const bgRu = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgRuRules } = await import("constants/bg-ru.rules");

  const transliterator = RBT.fromRules(bgRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
