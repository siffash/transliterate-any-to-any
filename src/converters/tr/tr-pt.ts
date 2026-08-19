import { Text } from "types";

export const trPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
