import { Text } from "types";

export const elLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { elLatnRules } = await import("constants/el-latn.rules");
  const { latnLbRules } = await import("constants/latn-lb.rules");

  const transliterator = RBT.fromRules(elLatnRules + latnLbRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
