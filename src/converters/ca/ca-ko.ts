import { Text } from "types";

export const caKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { caIpaKoRules } = await import("data/ca/ca-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, caIpaRules + caIpaKoRules + ipaKoFinalKpRules + ipaKoRules);
};
