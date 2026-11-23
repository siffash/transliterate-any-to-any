import { Text } from "types";

export const frIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  return convertText(text, ipaIsRules, { source: frIpa, caseLang: "is", elision: true });
};
