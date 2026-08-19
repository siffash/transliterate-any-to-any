import { Text } from "types";

export const lbHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
