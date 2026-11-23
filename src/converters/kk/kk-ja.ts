import { Text } from "types";

export const kkJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, kkIpaRules + ipaDevoiceVRules + ipaJaRules);
};
