import { Text } from "types";

export const frFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  const transliterator = RBT.fromRules(ipaFaOeRules + ipaFaNjRules + ipaFaRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, { finalIeu: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text, { finalIeu: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
