import { Text } from "types";

export const azJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(azIpaRules + ipaDevoiceVRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
