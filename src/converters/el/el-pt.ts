import { Text } from "types";

export const elPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el-latn.rules");
  const { latnPtRules } = await import("data/latn-pt.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
