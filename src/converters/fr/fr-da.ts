import { Text } from "types";

export const frDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  return convertText(text, ipaDaRules, { source: frIpa, caseLang: "da", elision: true });
};
