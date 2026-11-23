import { Text } from "types";

export const itPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, itLatnRules + latnPtRules + latnKQuRules);
};
