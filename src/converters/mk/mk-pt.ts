import { Text } from "types";

export const mkPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mkLatnRules } = await import("constants/mk-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(mkLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
