import { Text } from "types";

export const arRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemDRules } = await import("data/ar/ar-ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  const transliterator = RBT.fromRules(arIpaGemDRules + ipaRuRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
