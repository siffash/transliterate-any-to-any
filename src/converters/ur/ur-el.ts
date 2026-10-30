import { Text } from "types";

export const urEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaElRules } = await import("data/ur/ur-ipa_el.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  const transliterator = RBT.fromRules(ipaGemRules + urIpaElRules + ipaElRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
