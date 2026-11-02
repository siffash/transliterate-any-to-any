import { Text } from "types";

export const deHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaHeVRules } = await import("data/de/de-ipa_he-v.rules");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaHeRules } = await import("data/de/de-ipa_he.rules");
  const { ipaHeAiRules } = await import("data/ipa/ipa-he_ai.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(
    deIpaHeVRules + deIpaRules + deIpaHeRules + ipaHeAiRules + ipaHeRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
