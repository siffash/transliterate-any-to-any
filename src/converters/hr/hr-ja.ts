import { Text } from "types";

export const hrJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJaIcRules } = await import("data/ipa/ipa-ja_ic.rules");

  return convertText(text, hrIpaRules + ipaJaIcRules + ipaJaRules);
};
