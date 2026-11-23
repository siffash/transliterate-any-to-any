import { Text } from "types";

export const lvEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, lvLatnRules + latnEtRules);
};
