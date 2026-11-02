import { Text } from "types";

export const lbFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, undefined, ipaDevoiceVRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, false, undefined, ipaDevoiceVRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
