import { Text } from "types";

export const lvAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnAyRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
