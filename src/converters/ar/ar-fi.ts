import { Text } from "types";

export const arFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, ipaGemTRules + ipaFiRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
