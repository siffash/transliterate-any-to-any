import { Text } from "types";

export const idKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, idIpaRules + ipaFinalHRules + ipaKoRules);
};
