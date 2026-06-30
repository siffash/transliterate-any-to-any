import { Text } from "types";

export const lbRo = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lbLatnRules } = await import("constants/lb-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(lbLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
