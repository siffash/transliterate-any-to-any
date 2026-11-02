import { Text } from "types";

export const frHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHiLongARules } = await import("data/ipa/ipa-hi_long-a.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiLongARules + ipaHiRules);

  if (typeof text === "string") {
    const ipa = await frIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await frIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
