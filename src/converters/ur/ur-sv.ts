import { Text } from "types";

export const urSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemTRules } = await import("data/ur/ur-ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  const transliterator = RBT.fromRules(urIpaGemTRules + urIpaHRules + ipaSvRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
