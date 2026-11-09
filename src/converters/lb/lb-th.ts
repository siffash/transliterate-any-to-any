import { Text } from "types";

export const lbTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaThRules } = await import("data/fr/fr-ipa_th.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(ipaThRules + ipaThKaranRules);
  const frenchTransliterator = RBT.fromRules(frIpaThRules);
  // French words get the same Thai reading as fr → th
  const frenchIpa = async (words: string[]) =>
    (await frIpa<string[]>(words, { keepSchwa: true, velarNasals: true })).map(ipa =>
      frenchTransliterator.transliterate(ipa),
    );

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, frenchIpa, ipaErRules + ipaThOpenRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, false, frenchIpa, ipaErRules + ipaThOpenRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
