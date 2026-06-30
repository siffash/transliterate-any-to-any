import { Text } from "types";

export const ltEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { ltLatnRules } = await import("constants/lt-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(ltLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
