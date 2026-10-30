import { Text } from "types";

export const urBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  const transliterator = RBT.fromRules(ipaGemRules + ipaAspHRules + ipaBsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
