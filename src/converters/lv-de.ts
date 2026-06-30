import { Text } from "types";

export const lvDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnDeRules } = await import("constants/latn-de.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
