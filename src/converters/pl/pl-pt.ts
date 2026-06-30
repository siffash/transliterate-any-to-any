import { Text } from "types";

export const plPt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnPtRules } = await import("constants/latn-pt.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnPtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
