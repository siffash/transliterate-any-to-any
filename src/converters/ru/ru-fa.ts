import { Text } from "types";

export const ruFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ruIpaFaRules } = await import("data/ru/ru-ipa_fa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(
    text,
    ruIpaRules + ruIpaFaRules + ipaIjRules + ipaDevoiceVRules + ipaFaInitialARules + ipaFaRules,
  );
};
