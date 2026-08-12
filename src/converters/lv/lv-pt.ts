import { Text } from "types";

export const lvPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
