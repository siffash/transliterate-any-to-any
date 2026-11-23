import { Text } from "types";

export const bnSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemTRules } = await import("data/bn/bn-latn_gemt.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, bnLatnRules + bnLatnGemTRules + latnSvRules);
};
