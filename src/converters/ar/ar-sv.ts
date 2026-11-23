import { Text } from "types";

export const arSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  return convertText(text, ipaGemTRules + ipaSvRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
