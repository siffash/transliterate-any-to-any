import { Text } from "types";

export const tgEn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgEnRules } = await import("data/tg/tg-en.rules");

  const transliterator = RBT.fromRules(tgEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
