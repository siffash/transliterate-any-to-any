import { Text } from "types";

export const lbHy = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnHyRules } = await import("constants/latn-hy.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
