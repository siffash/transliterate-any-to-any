import { Text } from "types";

export const roAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaFinalPalatalIRules } = await import("data/ipa/ipa_final-palatal-i.rules");

  return convertText(text, roIpaRules + ipaFinalPalatalIRules + ipaArRules);
};
