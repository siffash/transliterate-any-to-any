import { Text } from "types";

export const ptKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ptIpaRules } = await import("data/pt/pt-ipa.rules");
  const { ptIpaKoRules } = await import("data/pt/pt-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, ptIpaRules + ptIpaKoRules + ipaKoFinalKpRules + ipaKoRules);
};
