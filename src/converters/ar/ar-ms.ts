import { Text } from "types";

export const arMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpaGemRules } = await import("data/ar/ar-ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  const transliterator = RBT.fromRules(arIpaGemRules + ipaMsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
