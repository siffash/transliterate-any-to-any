import { Text } from "types";

export const bnNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemTRules } = await import("data/bn/bn-latn_gemt.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, bnLatnRules + bnLatnGemTRules + latnNoRules);
};
