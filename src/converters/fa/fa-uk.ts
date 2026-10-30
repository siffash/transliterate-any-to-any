import { Text } from "types";

export const faUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaGemDRules } = await import("data/fa/fa-ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");

  const transliterator = RBT.fromRules(faIpaGemDRules + faIpaARules + ipaUkRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
