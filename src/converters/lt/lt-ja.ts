import { Text } from "types";

export const ltJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ltIpaJaRules } = await import("data/lt/lt-ipa_ja.rules");

  return convertText(text, ltIpaRules + ltIpaJaRules + ipaJaRules);
};
