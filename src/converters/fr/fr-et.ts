import { Text } from "types";

export const frEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaEtRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "et");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "et"));
  }
};
