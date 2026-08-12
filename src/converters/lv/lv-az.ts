import { Text } from "types";

export const lvAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("data/lv-latn.rules");
  const { latnAzRules } = await import("data/latn-az.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
