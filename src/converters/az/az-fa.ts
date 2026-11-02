import { Text } from "types";

export const azFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaDevoiceVRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
