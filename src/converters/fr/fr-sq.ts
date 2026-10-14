import { Text } from "types";

export const frSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaSqRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "sq");
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "sq"));
  }
};
