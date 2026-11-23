import { Text } from "types";

export const viJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viJaRules } = await import("data/vi/vi-ja.rules");

  return convertText(text, viJaRules);
};
