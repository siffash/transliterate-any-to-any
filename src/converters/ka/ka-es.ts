import { Text } from "types";

export const kaEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kaLatnRules } = await import("constants/ka-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
