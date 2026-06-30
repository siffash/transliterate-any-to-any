import { Text } from "types";

export const dePl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
