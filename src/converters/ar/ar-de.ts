import { Text } from "types";

export const arDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, ipaDeRules + "::Title;" + arLowerRules, { source: arIpa });
};
