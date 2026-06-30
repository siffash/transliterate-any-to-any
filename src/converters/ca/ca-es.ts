import { Text } from "types";

export const caEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
