import { Text } from "types";

export const arEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, ipaGemRules + ipaEsRules + "::Title;" + arLowerRules, { source: arIpa });
};
