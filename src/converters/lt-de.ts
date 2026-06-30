import { Text } from "types";

export const ltDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnDeRules } = await import("constants/latn-de.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
