import { Text } from "types";

export const elMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
