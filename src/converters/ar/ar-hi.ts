import { Text } from "types";

export const arHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(ipaHiRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
