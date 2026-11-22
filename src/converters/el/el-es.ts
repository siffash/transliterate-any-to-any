import { Text } from "types";

export const elEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { latnXRules } = await import("data/latn/latn_x.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnEsRules + latnXRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
