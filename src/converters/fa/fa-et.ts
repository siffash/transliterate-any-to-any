import { Text } from "types";

export const faEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaGemTRules } = await import("data/fa/fa-ipa_gemt.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  const transliterator = RBT.fromRules(faIpaGemTRules + faIpaARules + ipaEtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
