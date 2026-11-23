import { Text } from "types";

export const bnEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnGemRules } = await import("data/bn/bn-latn_gem.rules");
  const { bnLatnElRules } = await import("data/bn/bn-latn_el.rules");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, bnLatnRules + bnLatnGemRules + bnLatnElRules + latnElRules);
};
