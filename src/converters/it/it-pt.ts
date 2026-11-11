import { Text } from "types";

export const itPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnPtRules + latnKQuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
