import { Text } from "types";

export const skLv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
