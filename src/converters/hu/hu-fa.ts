import { Text } from "types";

export const huFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { huIpaFaRules } = await import("data/hu/hu-ipa_fa.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(text, huIpaRules + huIpaFaRules + ipaFaNjRules + ipaFaOeRules + ipaFaRules);
};
