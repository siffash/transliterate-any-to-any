import { Text } from "types";

export const elLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el-latn.rules");
  const { latnLvRules } = await import("data/latn-lv.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
