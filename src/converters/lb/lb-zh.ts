import { Text } from "types";

export const lbZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { lbIpaErRules } = await import("data/lb/lb-ipa_er.rules");
  const { lbIpaZhRules } = await import("data/lb/lb-ipa_zh.rules");
  const { ipaZhInRules } = await import("data/ipa/ipa-zh_in.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaZhRules);
  const frenchTransliterator = RBT.fromRules(ipaZhInRules);
  // French words get the same Chinese reading as fr → zh (Luxembourgish -eng stays 伦)
  const frenchIpa = async (words: string[]) =>
    (
      await frIpa<string[]>(words, {
        velarA: true,
        keepSchwa: true,
        velarNasals: true,
        finalIeu: true,
      })
    ).map(ipa => frenchTransliterator.transliterate(ipa));

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, true, frenchIpa, lbIpaErRules + lbIpaZhRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, true, frenchIpa, lbIpaErRules + lbIpaZhRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
