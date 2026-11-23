import { Text } from "types";

export const srJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJaIcRules } = await import("data/ipa/ipa-ja_ic.rules");

  return convertText(text, srIpaRules + ipaJaIcRules + ipaJaRules);
};
