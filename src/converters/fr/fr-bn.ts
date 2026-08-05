import { Text } from "types";

export const frBn = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaBnRules } = await import("constants/ipa-bn.rules");

  const transliterator = RBT.fromRules(ipaBnRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
