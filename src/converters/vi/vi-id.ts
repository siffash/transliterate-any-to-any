import { Text } from "types";

export const viId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, viLatnRules + latnIdRules);
};
