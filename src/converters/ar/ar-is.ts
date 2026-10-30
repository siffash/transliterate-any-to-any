import { Text } from "types";

export const arIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemTRules } = await import("data/ar/ar-ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  const transliterator = RBT.fromRules(arIpaGemTRules + ipaIsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
