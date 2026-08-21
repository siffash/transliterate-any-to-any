import { Text } from "types";

export const elBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
