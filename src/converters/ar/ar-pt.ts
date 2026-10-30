import { Text } from "types";

export const arPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemRules } = await import("data/ar/ar-ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  const transliterator = RBT.fromRules(arIpaGemRules + ipaPtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
