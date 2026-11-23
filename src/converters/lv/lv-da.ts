import { Text } from "types";

export const lvDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, lvLatnRules + latnDaRules);
};
