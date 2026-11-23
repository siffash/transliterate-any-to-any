import { Text } from "types";

export const kaKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, kaIpaRules + ipaKoFinalKpRules + ipaKoRules);
};
