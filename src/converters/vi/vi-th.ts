import { Text } from "types";

export const viTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viThRules } = await import("data/vi/vi-th.rules");

  return convertText(text, viThRules);
};
