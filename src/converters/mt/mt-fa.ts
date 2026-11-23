import { Text } from "types";

export const mtFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, mtIpaRules + ipaFaRules);
};
