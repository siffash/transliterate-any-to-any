import { Text } from "types";

export const lvKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, lvLatnRules + latnKaRules);
};
