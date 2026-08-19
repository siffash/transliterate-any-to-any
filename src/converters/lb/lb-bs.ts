import { Text } from "types";

export const lbBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
