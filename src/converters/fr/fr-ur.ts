import { Text } from "types";

export const frUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { frLatnUrSaintRules } = await import("data/fr/fr-latn_ur-saint.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const prepassTransliterator = RBT.fromRules(frLatnUrSaintRules);

  return convertText(text, ipaUrRules, {
    source: words =>
      frIpa(
        words.map(word => prepassTransliterator.transliterate(word)),
        { finalIeu: true },
      ),
  });
};
