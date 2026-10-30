import { Text } from "types";

export const frKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoEzhRules + ipaKoRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
