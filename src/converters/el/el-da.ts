import { Text } from "types";

export const elDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
