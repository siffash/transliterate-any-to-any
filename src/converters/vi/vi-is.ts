import { Text } from "types";

export const viIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, viLatnRules + latnThTRules + latnIsRules);
};
