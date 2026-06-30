import { Text } from "types";

export const bsLv = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { bsLatnRules } = await import("constants/bs-latn.rules");
  const { latnLvRules } = await import("constants/latn-lv.rules");

  const transliterator = RBT.fromRules(bsLatnRules + latnLvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
