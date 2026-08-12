import { Text } from "types";

export const skPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
