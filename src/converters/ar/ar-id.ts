import { Text } from "types";

export const arId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, ipaIdRules + "::Title;" + arLowerRules, { source: arIpa });
};
