import { Text } from "types";

export const frKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaKoRules } = await import("data/fr/fr-ipa_ko.rules");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    frIpaKoRules + ipaKoEzhRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false, false, false, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false, false, false, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
