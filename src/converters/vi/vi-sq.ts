import { Text } from "types";

export const viSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, viLatnRules + latnThTRules + latnSqRules);
};
