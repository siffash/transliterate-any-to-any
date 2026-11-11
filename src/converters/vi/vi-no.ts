import { Text } from "types";

export const viNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnIRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
