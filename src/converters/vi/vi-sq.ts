import { Text } from "types";

export const viSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("constants/vi-latn.rules");
  const { latnSqRules } = await import("constants/latn-sq.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
