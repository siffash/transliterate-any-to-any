import { Text } from "types";

export const csEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { csLatnRules } = await import("constants/cs-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(csLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
