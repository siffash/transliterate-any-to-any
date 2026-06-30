import { Text } from "types";

export const lvIs = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
