import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const frBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaBgRules } = await import("constants/ipa-bg.rules");

  const transliterator = RBT.fromRules(ipaBgRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await frIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
