import { Text } from "types";

export const arIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  return convertText(text, ipaGemTRules + ipaIsRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
