import { Text } from "types";

export const lbJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaJaRules } = await import("data/fr/fr-ipa_ja.rules");
  const { lbIpaDevoiceRules } = await import("data/lb/lb-ipa_devoice.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);
  const frenchTransliterator = RBT.fromRules(frIpaJaRules);
  // French words get the same Japanese reading as fr → ja
  const frenchIpa = async (words: string[]) =>
    (await frIpa<string[]>(words, false, true)).map(ipa => frenchTransliterator.transliterate(ipa));

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, frenchIpa, lbIpaDevoiceRules + ipaDevoiceBgRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(
      text,
      false,
      frenchIpa,
      lbIpaDevoiceRules + ipaDevoiceBgRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
