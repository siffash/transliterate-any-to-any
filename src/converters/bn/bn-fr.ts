import { Text } from "types";

export const bnFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemRules } = await import("data/bn/bn-latn_gem.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");

  return convertText(text, bnLatnRules + bnLatnGemRules + latnFrRules);
};
