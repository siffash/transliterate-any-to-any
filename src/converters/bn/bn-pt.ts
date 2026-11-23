import { Text } from "types";

export const bnPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemRules } = await import("data/bn/bn-latn_gem.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");

  return convertText(text, bnLatnRules + bnLatnGemRules + latnPtRules);
};
