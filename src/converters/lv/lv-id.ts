import { Text } from "types";

export const lvId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, lvLatnRules + latnIdRules);
};
