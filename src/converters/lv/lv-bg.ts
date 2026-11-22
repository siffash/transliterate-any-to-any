import { Text } from "types";

export const lvBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  const transliterator = RBT.fromRules(lvLatnDiphthongIRules + lvLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
