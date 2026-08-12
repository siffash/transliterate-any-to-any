import { Text } from "types";

export const viFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi-latn.rules");
  const { latnFrRules } = await import("data/latn-fr.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
