import { Text } from "types";

export const arHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaHeShortAjRules } = await import("data/ipa/ipa-he_short-aj.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arHeRules } = await import("data/ar/ar-he.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ipaHeShortAjRules + arHeRules + ipaGemRules + ipaHeRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
