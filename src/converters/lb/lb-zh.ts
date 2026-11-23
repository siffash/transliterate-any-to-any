import { Text } from "types";

export const lbZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { lbIpaErRules } = await import("data/lb/lb-ipa_er.rules");
  const { lbIpaZhRules } = await import("data/lb/lb-ipa_zh.rules");
  const { ipaZhInRules } = await import("data/ipa/ipa-zh_in.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const frenchTransliterator = RBT.fromRules(ipaZhInRules);
  const frenchIpa = async (words: string[]) =>
    (
      await frIpa<string[]>(words, {
        velarA: true,
        keepSchwa: true,
        velarNasals: true,
        finalIeu: true,
      })
    ).map(ipa => frenchTransliterator.transliterate(ipa));

  return convertText(text, ipaZhRules, {
    source: words => lbIpa(words, true, frenchIpa, lbIpaErRules + lbIpaZhRules),
  });
};
