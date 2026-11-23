import { Text } from "types";

export const arDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  return convertText(text, ipaGemTRules + ipaDaRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
