import { Text } from "types";

export const bgMk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bgMkRules } = await import("constants/bg-mk.rules");

  const transliterator = RBT.fromRules(bgMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
