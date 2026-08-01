import { Text } from "types";

export const urAr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urArRules } = await import("constants/ur-ar.rules");

  const transliterator = RBT.fromRules(urArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
