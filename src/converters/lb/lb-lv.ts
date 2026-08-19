import { Text } from "types";

export const lbLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
