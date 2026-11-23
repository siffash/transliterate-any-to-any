import { Text } from "types";

export const roJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, roIpaRules + ipaJaRules);
};
