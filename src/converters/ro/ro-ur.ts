import { Text } from "types";

export const roUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaFinalPalatalIRules } = await import("data/ipa/ipa_final-palatal-i.rules");

  return convertText(text, roIpaRules + ipaUrInitialARules + ipaFinalPalatalIRules + ipaUrRules);
};
