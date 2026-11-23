import { Text } from "types";

export const frAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ipaArRules, { source: words => frIpa(words, { finalIeu: true }) });
};
