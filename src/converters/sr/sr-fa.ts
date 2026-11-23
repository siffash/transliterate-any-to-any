import { Text } from "types";

export const srFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");
  const { srIpaFaRules } = await import("data/sr/sr-ipa_fa.rules");

  return convertText(text, srIpaRules + srIpaFaRules + ipaFaNjRules + ipaFaRules);
};
