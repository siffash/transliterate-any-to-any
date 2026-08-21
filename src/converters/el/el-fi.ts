import { Text } from "types";

export const elFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { elLatnRules } = await import("data/el/el-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
