import { Text } from "types";

export const etDa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnDaRules } = await import("constants/latn-da.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
