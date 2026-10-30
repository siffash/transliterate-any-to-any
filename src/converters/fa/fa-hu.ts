import { Text } from "types";

export const faHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaGemHuRules } = await import("data/fa/fa-ipa_gemhu.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(faIpaGemHuRules + faIpaARules + ipaHuRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
