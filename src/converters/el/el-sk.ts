import { Text } from "types";

export const elSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnSkRules } = await import("constants/latn-sk.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnSkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
