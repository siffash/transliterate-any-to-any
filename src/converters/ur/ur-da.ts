import { Text } from "types";

export const urDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemTRules } = await import("data/ur/ur-ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  const transliterator = RBT.fromRules(urIpaGemTRules + urIpaHRules + ipaDaRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
