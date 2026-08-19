import { Text } from "types";

export const daCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(daLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
