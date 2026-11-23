import { Text } from "types";

export const bnDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemTRules } = await import("data/bn/bn-latn_gemt.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, bnLatnRules + bnLatnGemTRules + latnDaRules);
};
