import { Text } from "types";

export const viMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi-latn.rules");
  const { latnMtRules } = await import("data/latn-mt.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
