import { Text } from "types";

export const arIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, ipaItRules + "::Title;" + arLowerRules, { source: arIpa });
};
