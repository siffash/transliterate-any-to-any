import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frPt = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaPtRules } = await import("constants/ipa-pt.rules");

  const transliterator = RBT.fromRules(ipaPtRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
