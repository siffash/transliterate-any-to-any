import { Text } from "types";

export const itSr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { itLatnRules } = await import("constants/it-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(itLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
