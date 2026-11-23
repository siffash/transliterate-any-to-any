import { Text } from "types";

export const viNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, viLatnRules + latnIRules + latnNlRules);
};
