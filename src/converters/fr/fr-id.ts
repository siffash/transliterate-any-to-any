import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frId = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaIdRules } = await import("constants/ipa-id.rules");

  const transliterator = RBT.fromRules(ipaIdRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
