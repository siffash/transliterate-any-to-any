import { Text } from "types";

export const skMt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnMtRules } = await import("constants/latn-mt.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnMtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
