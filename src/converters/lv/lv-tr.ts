import { Text } from "types";

export const lvTr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv-latn.rules");
  const { latnTrRules } = await import("data/latn-tr.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnTrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
