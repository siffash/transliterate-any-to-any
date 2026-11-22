import { Text } from "types";

export const bgJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaFinalDRules } = await import("data/ipa/ipa_final-d.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaDevoiceVRules + ipaFinalDRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
