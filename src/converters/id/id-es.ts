import { Text } from "types";

export const idEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
