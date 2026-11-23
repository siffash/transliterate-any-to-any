import { Text } from "types";

export const arVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  return convertText(text, ipaViRules + "::Title;" + arLowerRules, { source: arIpa });
};
