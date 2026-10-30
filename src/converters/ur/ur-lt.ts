import { Text } from "types";

export const urLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemRules } = await import("data/ur/ur-ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");

  const transliterator = RBT.fromRules(urIpaGemRules + urIpaHRules + ipaLtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
