import { Text } from "types";

export const hrHy = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
