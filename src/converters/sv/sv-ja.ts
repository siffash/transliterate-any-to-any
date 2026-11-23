import { Text } from "types";

export const svJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, svIpaRules + ipaJaRules);
};
