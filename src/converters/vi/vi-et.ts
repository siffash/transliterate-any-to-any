import { Text } from "types";

export const viEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, viLatnRules + latnEtRules);
};
