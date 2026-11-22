import { Text } from "types";

export const frUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frLatnUrSaintRules } = await import("data/fr/fr-latn_ur-saint.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const prepassTransliterator = RBT.fromRules(frLatnUrSaintRules);
  const transliterator = RBT.fromRules(ipaUrRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(prepassTransliterator.transliterate(text), {
      finalIeu: true,
    });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(
      text.map(text => prepassTransliterator.transliterate(text)),
      { finalIeu: true },
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
