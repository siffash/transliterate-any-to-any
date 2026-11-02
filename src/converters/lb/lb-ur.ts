import { Text } from "types";

export const lbUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrErRules } = await import("data/ipa/ipa-ur_er.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(ipaUrErRules + ipaUrRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, undefined, ipaDevoiceVRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(text, false, undefined, ipaDevoiceVRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
