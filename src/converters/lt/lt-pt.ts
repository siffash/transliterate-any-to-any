import { Text } from "types";

export const ltPt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
