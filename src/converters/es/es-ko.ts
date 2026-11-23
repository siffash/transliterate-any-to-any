import { Text } from "types";

export const esKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaKoWRules } = await import("data/ipa/ipa-ko_w.rules");
  const { esIpaRules } = await import("data/es/es-ipa.rules");
  const { ipaLlJRules } = await import("data/ipa/ipa_ll-j.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, esIpaRules + ipaLlJRules + ipaKoWRules + ipaKoFinalKpRules + ipaKoRules);
};
