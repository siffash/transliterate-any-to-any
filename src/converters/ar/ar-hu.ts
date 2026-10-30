import { Text } from "types";

export const arHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemHuRules } = await import("data/ar/ar-ipa_gemhu.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(arIpaGemHuRules + ipaHuRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
