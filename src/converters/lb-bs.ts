import { Text } from "types";

export const lbBs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
