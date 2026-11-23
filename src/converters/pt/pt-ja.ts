import { Text } from "types";

export const ptJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaJaWRules } = await import("data/ipa/ipa-ja_w.rules");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaJaRules } = await import("data/pt/pt-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, ptIpaRules + ptIpaJaRules + ipaJaWRules + ipaJaRules);
};
