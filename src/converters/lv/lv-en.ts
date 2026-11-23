import { Text } from "types";

export const lvEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");

  return convertText(text, lvLatnRules + latnEnRules);
};
