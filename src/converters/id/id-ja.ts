import { Text } from "types";

export const idJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { msIdIpaJaRules } = await import("data/ipa/ms_id-ipa_ja.rules");

  return convertText(text, idIpaRules + ipaFinalHRules + msIdIpaJaRules + ipaJaRules);
};
