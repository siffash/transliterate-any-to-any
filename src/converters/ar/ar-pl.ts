import { Text } from "types";

export const arPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaPlArabRules } = await import("data/ipa/ipa-pl_arab.rules");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(text, ipaPlArabRules + ipaPlRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
