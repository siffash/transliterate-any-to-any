import { Text } from "types";

export const lvCs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
