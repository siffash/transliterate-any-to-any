import { Text } from "types";

export const ptAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ptIpaRules + ptIpaNasalRules + ipaArRules);
};
