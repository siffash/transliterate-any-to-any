import { Text } from "types";

export const arSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, ipaGemDRules + ipaSkRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
