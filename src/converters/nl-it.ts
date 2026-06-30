import { Text } from "types";

export const nlIt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { nlLatnRules } = await import("constants/nl-latn.rules");
  const { latnItRules } = await import("constants/latn-it.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnItRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
