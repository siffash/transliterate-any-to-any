import { Text } from "types";

export const elSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { elLatnNtRules } = await import("data/el/el-latn_nt.rules");
  const { latnSlIjRules } = await import("data/latn/latn-sl_ij.rules");

  const transliterator = RBT.fromRules(elLatnNtRules + elLatnRules + latnSlRules + latnSlIjRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
