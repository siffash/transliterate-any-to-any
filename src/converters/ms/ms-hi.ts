import { Text } from "types";

export const msHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { msIdIpaAspRules } = await import("data/ipa/ms_id-ipa_asp.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, msIpaRules + msIdIpaAspRules + ipaHiRules);
};
