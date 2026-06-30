import { Text } from "types";

export const ruPl = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnPlRules } = await import("constants/latn-pl.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnPlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
