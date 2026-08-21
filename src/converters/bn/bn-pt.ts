import { Text } from "types";

export const bnPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
