import { Text } from "types";

export const lvMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, lvLatnRules + latnMsRules);
};
