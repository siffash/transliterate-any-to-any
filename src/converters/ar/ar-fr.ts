import { Text } from "types";

export const arFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaFrRules } = await import("data/ipa/ipa-fr.rules");

  return convertText(text, ipaGemRules + ipaFrRules + "::Title;" + arLowerRules, { source: arIpa });
};
