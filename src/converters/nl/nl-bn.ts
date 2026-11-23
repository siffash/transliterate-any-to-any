import { Text } from "types";

export const nlBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, nlIpaRules + ipaFinalSchwaERules + ipaBnRules);
};
