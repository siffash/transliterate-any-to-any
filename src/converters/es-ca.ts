import { Text } from "types";

export const esCa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
