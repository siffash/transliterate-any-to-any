import { Text } from "types";

export const frTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(ipaThRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
