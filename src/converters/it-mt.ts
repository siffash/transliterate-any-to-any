import { Text } from "types";

export const itMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
