import { Text } from "types";

export const daJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { daIpaJaRules } = await import("data/da/da-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, daIpaRules + daIpaJaRules + ipaJaRules);
};
