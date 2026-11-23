import { Text } from "types";

export const viLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnKwKuRules } = await import("data/latn/latn_kw-ku.rules");

  return convertText(text, viLatnRules + latnKwKuRules + latnLtRules);
};
