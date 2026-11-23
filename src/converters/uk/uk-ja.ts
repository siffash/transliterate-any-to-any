import { Text } from "types";

export const ukJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaJaRules } = await import("data/uk/uk-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, ukIpaRules + ukIpaJaRules + ipaJaRules);
};
