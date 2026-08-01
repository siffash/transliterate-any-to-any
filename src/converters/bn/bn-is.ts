import { Text } from "types";

export const bnIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bnLatnRules } = await import("constants/bn-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(bnLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
