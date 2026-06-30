import { Text } from "types";

export const itIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
