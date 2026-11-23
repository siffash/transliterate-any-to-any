import { Text } from "types";

export const slJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaDevoiceZRules } = await import("data/ipa/ipa_devoice-z.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJaIcRules } = await import("data/ipa/ipa-ja_ic.rules");

  return convertText(text, slIpaRules + ipaDevoiceZRules + ipaJaIcRules + ipaJaRules);
};
