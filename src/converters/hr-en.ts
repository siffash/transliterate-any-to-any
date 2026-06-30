import { Text } from "types";

export const hrEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
