import { Text } from "types";

export const arEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  const transliterator = RBT.fromRules(ipaGemTRules + ipaEtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
