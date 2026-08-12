import { Text } from "types";

export const viSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("constants/vi-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
