import { Text } from "types";

export const viKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi-latn.rules");
  const { latnKkRules } = await import("data/latn-kk.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
