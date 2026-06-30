import { Text } from "types";

export const sqEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { sqLatnRules } = await import("constants/sq-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(sqLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
