import { Text } from "types";

export const viLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnKwKuRules } = await import("data/latn/latn_kw-ku.rules");

  const transliterator = RBT.fromRules(viLatnRules + latnKwKuRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
