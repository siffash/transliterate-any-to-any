import { Text } from "types";

export const lvDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnDaRules } = await import("constants/latn-da.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
