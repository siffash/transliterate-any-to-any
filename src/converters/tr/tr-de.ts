import { Text } from "types";

export const trDe = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnDeRules } = await import("constants/latn-de.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
