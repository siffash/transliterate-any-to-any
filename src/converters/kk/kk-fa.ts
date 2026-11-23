import { Text } from "types";

export const kkFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { kkIpaOeRules } = await import("data/kk/kk-ipa_oe.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, kkIpaRules + kkIpaOeRules + ipaDevoiceVRules + ipaFaRules);
};
