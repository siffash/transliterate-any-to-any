import { Text } from "types";

export const frKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaKoRules } = await import("data/fr/fr-ipa_ko.rules");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { frIpaKoHyphenRules } = await import("data/fr/fr-ipa_ko-hyphen.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(
    text,
    frIpaKoRules + ipaKoEzhRules + ipaKoFinalKpRules + frIpaKoHyphenRules + ipaKoRules,
    { source: words => frIpa(words, { keepSchwa: true, velarNasals: true, finalIeu: true }) },
  );
};
