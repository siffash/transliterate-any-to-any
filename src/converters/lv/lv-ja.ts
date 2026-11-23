import { Text } from "types";

export const lvJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, lvIpaRules + ipaDevoiceVRules + ipaJaRules);
};
