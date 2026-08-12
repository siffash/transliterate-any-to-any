import { Text } from "types";

export const lvTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnTrRules } = await import("constants/latn-tr.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
