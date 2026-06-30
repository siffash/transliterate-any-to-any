import { Text } from "types";

export const srEs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnEsRules } = await import("constants/latn-es.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
