import { Text } from "types";

export const viSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, viLatnRules + latnSlRules);
};
