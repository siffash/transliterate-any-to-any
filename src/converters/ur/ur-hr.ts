import { Text } from "types";

export const urHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHRules } = await import("data/ur/ur-ipa_h.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  const transliterator = RBT.fromRules(urIpaHRules + ipaHrRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
