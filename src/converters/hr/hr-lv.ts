import { Text } from "types";

export const hrLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");

  return convertText(text, hrLatnRules + latnLvRules);
};
