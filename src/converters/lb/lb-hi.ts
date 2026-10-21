import { Text } from "types";

export const lbHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
