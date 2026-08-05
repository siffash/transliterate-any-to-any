import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frSk = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaSkRules } = await import("constants/ipa-sk.rules");

  const transliterator = RBT.fromRules(ipaSkRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
