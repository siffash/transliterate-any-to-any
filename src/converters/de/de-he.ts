import { Text } from "types";

export const deHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deIpaHeVRules } = await import("data/de/de-ipa_he-v.rules");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { deIpaHeRules } = await import("data/de/de-ipa_he.rules");
  const { ipaHeAiRules } = await import("data/ipa/ipa-he_ai.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, deIpaHeVRules + deIpaRules + deIpaHeRules + ipaHeAiRules + ipaHeRules);
};
