import { Text } from "types";

export const lvHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { lvLatnDiphthongIRules } = await import("data/lv/lv-latn_diphthong-i.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, lvLatnDiphthongIRules + lvLatnRules + latnHyRules + hyEvRules);
};
