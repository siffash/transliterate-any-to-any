import { Text } from "types";

export const frHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ipaHeRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
