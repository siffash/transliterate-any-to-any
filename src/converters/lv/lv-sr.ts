import { Text } from "types";

export const lvSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");

  return convertText(text, lvLatnRules + latnAyRules + latnSrRules);
};
