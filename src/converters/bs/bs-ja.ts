import { Text } from "types";

export const bsJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsIpaRules } = await import("data/bs/bs-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJaIcRules } = await import("data/ipa/ipa-ja_ic.rules");

  return convertText(text, bsIpaRules + ipaJaIcRules + ipaJaRules);
};
