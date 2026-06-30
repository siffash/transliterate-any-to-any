import { Text } from "types";

export const kkCa = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnCaRules } = await import("constants/latn-ca.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnCaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
