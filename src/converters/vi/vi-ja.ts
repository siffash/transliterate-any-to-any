import { Text } from "types";

export const viJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viJaRules } = await import("data/vi/vi-ja.rules");

  const transliterator = RBT.fromRules(viJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
