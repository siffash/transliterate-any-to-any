import { Text } from "types";

export const kkAz = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
