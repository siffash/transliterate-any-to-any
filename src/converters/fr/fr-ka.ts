import { Text } from "types";

export const frKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaNgRules } = await import("data/fr/fr-ipa_ng.rules");
  const { frHeIpaRRules } = await import("data/ipa/fr_he-ipa_r.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(frIpaNgRules + frHeIpaRRules + ipaKaRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
