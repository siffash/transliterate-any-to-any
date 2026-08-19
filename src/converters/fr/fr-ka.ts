import { Text } from "types";

export const frKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
