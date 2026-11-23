import { Text } from "types";

export const lvTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");

  return convertText(text, lvLatnDiphthongIRules + lvLatnRules + latnTgRules);
};
