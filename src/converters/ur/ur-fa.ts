import { Text } from "types";

export const urFa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { urFaRules } = await import("constants/ur-fa.rules");

  const transliterator = RBT.fromRules(urFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
