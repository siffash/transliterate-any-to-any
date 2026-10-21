import { Text } from "types";

export const lbJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(ipaJaRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
