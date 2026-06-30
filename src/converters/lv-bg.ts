import { Text } from "types";

export const lvBg = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
