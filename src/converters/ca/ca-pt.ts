import { Text } from "types";

export const caPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnPtRules + latnKQuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
