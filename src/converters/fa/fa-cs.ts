import { Text } from "types";

export const faCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { faIpaGemDRules } = await import("data/fa/fa-ipa_gemd.rules");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { faIpaARules } = await import("data/fa/fa-ipa_a.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  const transliterator = RBT.fromRules(faIpaGemDRules + faIpaARules + ipaCsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
