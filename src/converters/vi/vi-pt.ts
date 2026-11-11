import { Text } from "types";

export const viPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnIRules + latnPtRules + latnKQuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
