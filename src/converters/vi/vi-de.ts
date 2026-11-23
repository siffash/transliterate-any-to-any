import { Text } from "types";

export const viDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, viLatnRules + latnIRules + latnDeRules);
};
