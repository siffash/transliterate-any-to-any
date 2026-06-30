import { Text } from "types";

export const lbLt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnLtRules } = await import("constants/latn-lt.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
