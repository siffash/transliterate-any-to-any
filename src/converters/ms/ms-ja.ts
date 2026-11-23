import { Text } from "types";

export const msJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaFinalHRules } = await import("data/ipa/ipa_finalh.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { msIdIpaJaRules } = await import("data/ipa/ms_id-ipa_ja.rules");

  return convertText(text, msIpaRules + ipaFinalHRules + msIdIpaJaRules + ipaJaRules);
};
