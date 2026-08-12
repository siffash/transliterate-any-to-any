import { Text } from "types";

export const lbCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lbLatnRules } = await import("data/lb-latn.rules");
  const { latnCsRules } = await import("data/latn-cs.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
