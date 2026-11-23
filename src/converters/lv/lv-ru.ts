import { Text } from "types";

export const lvRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  return convertText(text, lvLatnDiphthongIRules + lvLatnRules + latnRuRules);
};
