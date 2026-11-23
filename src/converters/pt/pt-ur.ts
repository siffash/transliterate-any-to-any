import { Text } from "types";

export const ptUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaNasalRules } = await import("data/pt/pt-ipa_nasal.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");

  return convertText(text, ptIpaRules + ptIpaNasalRules + ipaUrInitialARules + ipaUrRules);
};
