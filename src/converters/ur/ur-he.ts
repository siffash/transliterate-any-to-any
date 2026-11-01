import { Text } from "types";

export const urHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaHeShortAjRules } = await import("data/ipa/ipa-he_short-aj.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(ipaHeShortAjRules + ipaGemRules + ipaHeRules);

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
