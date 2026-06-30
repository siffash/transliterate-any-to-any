import { Text } from "types";

export const srPl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { srLatnRules } = await import("constants/sr-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(srLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
