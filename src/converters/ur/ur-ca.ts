import { Text } from "types";

export const urCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemRules } = await import("data/ur/ur-ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  const transliterator = RBT.fromRules(urIpaGemRules + urIpaHRules + ipaCaRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
