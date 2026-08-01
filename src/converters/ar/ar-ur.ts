import { Text } from "types";

export const arUr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { arUrRules } = await import("constants/ar-ur.rules");

  const transliterator = RBT.fromRules(arUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
