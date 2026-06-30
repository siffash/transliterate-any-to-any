import { Text } from "types";

export const sqAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
