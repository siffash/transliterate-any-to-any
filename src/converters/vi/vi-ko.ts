import { Text } from "types";

export const viKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viKoRules } = await import("data/vi/vi-ko.rules");

  return convertText(text, viKoRules);
};
