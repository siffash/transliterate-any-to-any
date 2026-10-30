import { Text } from "types";

export const arUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemDRules } = await import("data/ar/ar-ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(arIpaGemDRules + ipaUkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
