import { Text } from "types";

export const viSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, viLatnRules + latnAyRules + latnSrRules);
};
