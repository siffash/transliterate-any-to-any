import { Text } from "types";

export const viKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viKoRules } = await import("data/vi/vi-ko.rules");

  const transliterator = RBT.fromRules(viKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
