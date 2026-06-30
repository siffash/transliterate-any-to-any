import { Text } from "types";

export const esKa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnKaRules } = await import("constants/latn-ka.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
