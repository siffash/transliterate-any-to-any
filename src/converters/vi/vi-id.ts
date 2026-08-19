import { Text } from "types";

export const viId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
