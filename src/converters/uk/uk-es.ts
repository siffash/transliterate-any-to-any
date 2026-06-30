import { Text } from "types";

export const ukEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
