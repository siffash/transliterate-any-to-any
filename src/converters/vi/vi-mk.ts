import { Text } from "types";

export const viMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnMkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
