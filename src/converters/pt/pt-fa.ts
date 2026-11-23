import { Text } from "types";

export const ptFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  return convertText(
    text,
    ptIpaRules + ptIpaNasalRules + ipaWURules + ipaFaInitialARules + ipaFaNjRules + ipaFaRules,
  );
};
