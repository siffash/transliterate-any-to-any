import { Text } from "types";

export const viAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnKwKuRules } = await import("data/latn/latn_kw-ku.rules");

  return convertText(text, viLatnRules + latnKwKuRules + latnAyRules + latnAzRules);
};
