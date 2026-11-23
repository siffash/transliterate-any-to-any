import { Text } from "types";

export const lvIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, lvLatnRules + latnIsRules);
};
