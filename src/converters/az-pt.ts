import { Text } from "types";

export const azPt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
