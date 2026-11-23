import { Text } from "types";

export const msBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { msIdIpaAspRules } = await import("data/ipa/ms_id-ipa_asp.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, msIpaRules + msIdIpaAspRules + ipaBnRules);
};
