import { Text } from "types";

export const urKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspXRules } = await import("data/ipa/ipa_aspx.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  const transliterator = RBT.fromRules(ipaGemDRules + ipaAspXRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
