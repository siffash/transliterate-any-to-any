import { Text } from "types";

export const elLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
