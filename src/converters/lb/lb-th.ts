import { Text } from "types";

export const lbTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaThRules } = await import("data/fr/fr-ipa_th.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const frenchTransliterator = RBT.fromRules(frIpaThRules);
  const frenchIpa = async (words: string[]) =>
    (await frIpa<string[]>(words, { keepSchwa: true, velarNasals: true })).map(ipa =>
      frenchTransliterator.transliterate(ipa),
    );

  return convertText(text, ipaThRules + ipaThKaranRules, {
    source: words => lbIpa(words, false, frenchIpa, ipaErRules + ipaThOpenRules),
  });
};
