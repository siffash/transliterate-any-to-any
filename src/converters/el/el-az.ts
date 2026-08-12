import { Text } from "types";

export const elAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("data/el-latn.rules");
  const { latnAzRules } = await import("data/latn-az.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
