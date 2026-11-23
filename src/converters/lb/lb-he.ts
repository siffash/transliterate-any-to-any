import { Text } from "types";

export const lbHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, ipaHeRules, { source: lbIpa });
};
