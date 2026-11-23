import { Text } from "types";

export const ptHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaHeVbRules } = await import("data/ipa/ipa-he_vb.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return convertText(text, ptIpaRules + ptIpaNasalRules + ipaWURules + ipaHeVbRules + ipaHeRules);
};
