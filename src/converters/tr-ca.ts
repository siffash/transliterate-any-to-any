import { Text } from "types";

export const trCa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
