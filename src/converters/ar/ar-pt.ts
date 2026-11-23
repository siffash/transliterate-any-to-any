import { Text } from "types";

export const arPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  return convertText(text, ipaGemRules + ipaPtRules + "::Title;" + arLowerRules, { source: arIpa });
};
