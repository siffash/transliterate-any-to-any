import { Text } from "types";

export const frHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, ipaHeRules, { source: frIpa });
};
