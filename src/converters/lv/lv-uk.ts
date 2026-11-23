import { Text } from "types";

export const lvUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  return convertText(text, lvLatnDiphthongIRules + lvLatnRules + latnUkRules);
};
