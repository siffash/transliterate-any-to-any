import { Text } from "types";

export const hrBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
