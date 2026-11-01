import { Text } from "types";

export const viTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viThRules } = await import("data/vi/vi-th.rules");

  const transliterator = RBT.fromRules(viThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
