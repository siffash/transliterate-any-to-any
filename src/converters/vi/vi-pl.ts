import { Text } from "types";

export const viPl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("constants/vi-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
