import { Text } from "types";

let frenchMapIpa: Promise<Record<string, string>> | undefined;

// The lb map words are French, so they get the same Japanese reading as fr → ja
const getFrenchMapIpa = async () => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaJaRules } = await import("data/fr/fr-ipa_ja.rules");

  const transliterator = RBT.fromRules(frIpaJaRules);
  const words = Object.keys(lbIpaMap);
  const ipaArray = await frIpa<string[]>(words, false, true);
  return Object.fromEntries(
    words.map((word, i) => [word, transliterator.transliterate(ipaArray[i])]),
  );
};

export const lbJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);
  // A failed build isn't cached, so the next call retries it
  frenchMapIpa ??= getFrenchMapIpa().catch(error => {
    frenchMapIpa = undefined;
    throw error;
  });
  const mapIpa = await frenchMapIpa;

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, mapIpa);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, false, mapIpa);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
