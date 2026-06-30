import { Text } from "types";

export const etPl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
