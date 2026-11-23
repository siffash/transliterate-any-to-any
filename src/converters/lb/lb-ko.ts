import { Text } from "types";

export const lbKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaKoRules } = await import("data/fr/fr-ipa_ko.rules");
  const { lbIpaDevoiceRules } = await import("data/lb/lb-ipa_devoice.rules");
  const { lbIpaErRules } = await import("data/lb/lb-ipa_er.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaKoIchRules } = await import("data/ipa/ipa-ko_ich.rules");
  const { ipaKoErRules } = await import("data/ipa/ipa-ko_er.rules");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const frenchTransliterator = RBT.fromRules(frIpaKoRules);
  const frenchIpa = async (words: string[]) =>
    (await frIpa<string[]>(words, { keepSchwa: true, velarNasals: true, finalIeu: true })).map(
      ipa => frenchTransliterator.transliterate(ipa),
    );

  return convertText(text, ipaKoEzhRules + ipaKoFinalKpRules + ipaKoRules, {
    source: words =>
      lbIpa(
        words,
        false,
        frenchIpa,
        lbIpaErRules + lbIpaDevoiceRules + ipaDevoiceBgRules + ipaKoIchRules + ipaKoErRules,
      ),
  });
};
