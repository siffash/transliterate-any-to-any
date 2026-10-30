import { Text } from "types";

export const urIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpaGemTRules } = await import("data/ur/ur-ipa_gemt.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  const transliterator = RBT.fromRules(urIpaGemTRules + ipaIsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
