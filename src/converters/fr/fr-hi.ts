import { Text } from "types";

export const frHi = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHiRules } = await import("constants/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
