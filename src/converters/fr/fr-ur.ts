import { Text } from "types";

export const frUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(ipaUrRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
