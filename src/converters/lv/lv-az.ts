import { Text } from "types";

export const lvAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");

  return convertText(text, lvLatnRules + latnAyRules + latnAzRules);
};
