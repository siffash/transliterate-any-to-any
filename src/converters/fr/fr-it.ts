import { Text } from "types";

export const frIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaItRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "it");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "it"));
  }
};
