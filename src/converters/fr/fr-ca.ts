import { Text } from "types";

export const frCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  return convertText(text, ipaCaRules, { source: frIpa, caseLang: "ca", elision: true });
};
