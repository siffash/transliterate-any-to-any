import { Text } from "types";

export const arMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, ipaMtRules + "::Title;" + arLowerRules, { source: arIpa });
};
