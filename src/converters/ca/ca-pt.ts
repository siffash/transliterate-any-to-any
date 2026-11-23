import { Text } from "types";

export const caPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, caLatnRules + latnPtRules + latnKQuRules);
};
