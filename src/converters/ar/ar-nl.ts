import { Text } from "types";

export const arNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, ipaGemRules + ipaNlRules + "::Title;" + arLowerRules, { source: arIpa });
};
