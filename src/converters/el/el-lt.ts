import { Text } from "types";

export const elLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSingleRules } = await import("data/latn/latn_single.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");

  const transliterator = RBT.fromRules(elLatnNtRules + elLatnRules + latnSingleRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
