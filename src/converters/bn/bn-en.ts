import { Text } from "types";

export const bnEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnEnRules } = await import("data/bn/bn-en.rules");

  const transliterator = RBT.fromRules(bnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
