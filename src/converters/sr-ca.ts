import { Text } from "types";

export const srCa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
