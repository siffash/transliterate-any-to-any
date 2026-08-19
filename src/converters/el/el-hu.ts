import { Text } from "types";

export const elHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
