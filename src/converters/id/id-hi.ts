import { Text } from "types";

export const idHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { idIpaRules } = await import("data/id/id-ipa.rules");
  const { msIdIpaAspRules } = await import("data/ipa/ms_id-ipa_asp.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, idIpaRules + msIdIpaAspRules + ipaHiRules);
};
