import { Text } from "types";

export const bgJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaFinalDRules } = await import("data/ipa/ipa_final-d.rules");

  return convertText(text, bgIpaRules + ipaDevoiceVRules + ipaFinalDRules + ipaJaRules);
};
