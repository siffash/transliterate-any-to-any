import { Text } from "types";

export const bnIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemTRules } = await import("data/bn/bn-latn_gemt.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, bnLatnRules + bnLatnGemTRules + latnIsRules);
};
