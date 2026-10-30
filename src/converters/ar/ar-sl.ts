import { Text } from "types";

export const arSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  const transliterator = RBT.fromRules(ipaGemRules + ipaSlRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
