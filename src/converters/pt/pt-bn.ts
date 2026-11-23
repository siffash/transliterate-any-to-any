import { Text } from "types";

export const ptBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ptIpaRules + ptIpaNasalRules + ipaBnRules);
};
