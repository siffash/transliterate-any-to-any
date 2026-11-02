import { Text } from "types";

export const nlFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(nlIpaRules + ipaDevoiceVRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
