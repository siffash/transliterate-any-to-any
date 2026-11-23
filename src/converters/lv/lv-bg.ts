import { Text } from "types";

export const lvBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  return convertText(text, lvLatnDiphthongIRules + lvLatnRules + latnBgRules);
};
