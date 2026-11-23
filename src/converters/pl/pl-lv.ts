import { Text } from "types";

export const plLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { plLatnLvRules } = await import("data/pl/pl-latn_lv.rules");
  const { latnHoldRestoreRules } = await import("data/latn/latn_hold-restore.rules");

  return convertText(text, plLatnLvRules + plLatnRules + latnHoldRestoreRules + latnLvRules);
};
