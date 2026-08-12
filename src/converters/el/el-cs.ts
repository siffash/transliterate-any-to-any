import { Text } from "types";

export const elCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
