import { Text } from "types";

export const daBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaRRules } = await import("data/da/da-ipa_r.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, daIpaRules + daIpaRRules + ipaFinalSchwaERules + ipaBnRules);
};
