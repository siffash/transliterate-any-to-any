import { Text } from "types";

export const kkEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkEnRules } = await import("data/kk/kk-en.rules");

  const transliterator = RBT.fromRules(kkEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
