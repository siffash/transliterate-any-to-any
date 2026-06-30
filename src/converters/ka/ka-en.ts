import { Text } from "types";

export const kaEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaEnRules } = await import("constants/ka-en.rules");

  const transliterator = RBT.fromRules(kaEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
