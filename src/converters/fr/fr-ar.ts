import { Text } from "types";

export const frAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(ipaArRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
