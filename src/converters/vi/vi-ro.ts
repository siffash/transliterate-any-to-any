import { Text } from "types";

export const viRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("constants/vi-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
