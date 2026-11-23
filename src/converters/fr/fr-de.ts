import { Text } from "types";

export const frDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, ipaDeRules, { source: frIpa, caseLang: "de", elision: true });
};
