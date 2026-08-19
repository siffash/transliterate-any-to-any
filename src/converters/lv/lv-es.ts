import { Text } from "types";

export const lvEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
