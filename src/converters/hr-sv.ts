import { Text } from "types";

export const hrSv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
