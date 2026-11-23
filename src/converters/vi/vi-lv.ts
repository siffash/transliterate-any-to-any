import { Text } from "types";

export const viLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnKwKuRules } = await import("data/latn/latn_kw-ku.rules");
  const { latnLvNgRules } = await import("data/latn/latn-lv_ng.rules");

  return convertText(text, viLatnRules + latnKwKuRules + latnLvNgRules + latnLvRules);
};
