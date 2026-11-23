import { Text } from "types";

export const msLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvNgRules } = await import("data/latn/latn-lv_ng.rules");

  return convertText(text, msIdLatnRules + latnLvNgRules + latnLvRules);
};
