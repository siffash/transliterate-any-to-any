import { Text } from "types";

export const frTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frIpaThRules } = await import("data/fr/fr-ipa_th.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(frIpaThRules + ipaThRules + ipaThKaranRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, false, false, false, true, true);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, false, false, false, true, true);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
