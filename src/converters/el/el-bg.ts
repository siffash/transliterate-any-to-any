import { Text } from "types";

export const elBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
