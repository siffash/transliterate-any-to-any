import { Text } from "types";

export const elEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
