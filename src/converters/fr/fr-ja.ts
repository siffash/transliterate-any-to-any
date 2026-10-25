import { Text } from "types";

export const frJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaJaRules } = await import("data/fr/fr-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(frIpaJaRules + ipaJaRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
