import { Text } from "types";

export const frBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ipaBnRules, { source: words => frIpa(words, { finalIeu: true }) });
};
