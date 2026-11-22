import { Text } from "types";

export const lvUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  const transliterator = RBT.fromRules(lvLatnDiphthongIRules + lvLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
