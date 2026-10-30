import { Text } from "types";

export const faSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaGemRules } = await import("data/fa/fa-ipa_gem.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  const transliterator = RBT.fromRules(faIpaGemRules + faIpaARules + ipaSlRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
