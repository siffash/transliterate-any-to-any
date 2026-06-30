import { Text } from "types";

export const deMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
