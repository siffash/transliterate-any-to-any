import { Text } from "types";

export const viIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("constants/vi-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
