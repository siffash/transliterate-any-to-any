import { Text } from "types";

export const itKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itIpaKoRules } = await import("data/it/it-ipa_ko.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, itIpaRules + itIpaKoRules + ipaKoFinalKpRules + ipaKoRules);
};
