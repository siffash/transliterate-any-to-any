import { Text } from "types";

export const esLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
