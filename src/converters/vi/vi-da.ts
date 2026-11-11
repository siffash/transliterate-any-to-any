import { Text } from "types";

export const viDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnIRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
