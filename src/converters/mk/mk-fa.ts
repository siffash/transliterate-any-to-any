import { Text } from "types";

export const mkFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, mkIpaRules + ipaDevoiceVRules + ipaFaInitialARules + ipaFaRules);
};
