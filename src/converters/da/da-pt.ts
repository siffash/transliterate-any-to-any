import { Text } from "types";

export const daPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
