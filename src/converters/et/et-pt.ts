import { Text } from "types";

export const etPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
