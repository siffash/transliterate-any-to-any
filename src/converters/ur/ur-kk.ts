import { Text } from "types";

export const urKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemDRules } = await import("data/ur/ur-ipa_gemd.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaXRules } = await import("data/ur/ur-ipa_x.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  const transliterator = RBT.fromRules(urIpaGemDRules + urIpaXRules + ipaKkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
