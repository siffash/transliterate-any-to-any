import { Text } from "types";

export const frFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, ipaFiRules, { source: frIpa, caseLang: "fi", elision: true });
};
