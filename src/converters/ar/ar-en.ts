import { Text } from "types";

export const arEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { arIpaEnRules } = await import("data/ar/ar-ipa_en.rules");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");

  return convertText(text, arIpaEnRules + ipaEnRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
