import { Text } from "types";

export const urHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(ipaGemHuRules + ipaAspHRules + ipaHuRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
