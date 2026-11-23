import { Text } from "types";

export const trJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, trIpaRules + ipaJaRules);
};
