import { Text } from "types";

export const mtDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { mtLatnRules } = await import("constants/mt-latn.rules");
  const { latnDeRules } = await import("constants/latn-de.rules");

  const transliterator = RBT.fromRules(mtLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
