import { Text } from "types";

export const elIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
