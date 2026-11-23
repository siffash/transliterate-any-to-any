import { Text } from "types";

export const frJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaJaRules } = await import("data/fr/fr-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, frIpaJaRules + ipaJaRules, {
    source: words => frIpa(words, { japanese: true }),
  });
};
