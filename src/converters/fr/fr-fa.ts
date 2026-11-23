import { Text } from "types";

export const frFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(text, ipaFaOeRules + ipaFaNjRules + ipaFaRules, {
    source: words => frIpa(words, { finalIeu: true }),
  });
};
