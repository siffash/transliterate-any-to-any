import { Text } from "types";

export const hrSl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hrLatnRules } = await import("constants/hr-latn.rules");
  const { latnSlRules } = await import("constants/latn-sl.rules");

  const transliterator = RBT.fromRules(hrLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
