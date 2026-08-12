import { Text } from "types";

export const viNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi-latn.rules");
  const { latnNlRules } = await import("data/latn-nl.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
