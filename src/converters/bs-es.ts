import { Text } from "types";

export const bsEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
