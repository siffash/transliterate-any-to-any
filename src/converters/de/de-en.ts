import { Text } from "types";

export const deEn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnEnRules } = await import("constants/latn-en.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnEnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
