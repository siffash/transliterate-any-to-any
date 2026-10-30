import { Text } from "types";

export const urRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemDRules } = await import("data/ur/ur-ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");

  const transliterator = RBT.fromRules(urIpaGemDRules + urIpaHRules + ipaRuRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
