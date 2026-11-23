import { Text } from "types";

export const arMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, ipaGemRules + ipaMsRules + "::Title;" + arLowerRules, { source: arIpa });
};
