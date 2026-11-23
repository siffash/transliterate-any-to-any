import { Text } from "types";

export const frEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaEnRules } = await import("data/ipa/ipa-en.rules");

  return convertText(text, ipaEnRules, { source: frIpa, caseLang: "en", elision: true });
};
