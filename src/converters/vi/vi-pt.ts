import { Text } from "types";

export const viPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, viLatnRules + latnIRules + latnPtRules + latnKQuRules);
};
