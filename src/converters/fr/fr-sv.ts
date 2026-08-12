import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaSvRules } = await import("constants/ipa-sv.rules");

  const transliterator = RBT.fromRules(ipaSvRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
