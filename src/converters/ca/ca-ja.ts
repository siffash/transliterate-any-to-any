import { Text } from "types";

export const caJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { caIpaJaRules } = await import("data/ca/ca-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, caIpaRules + caIpaJaRules + ipaJaRules);
};
