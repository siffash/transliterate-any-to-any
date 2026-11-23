import { Text } from "types";

export const fiJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  return convertText(text, fiIpaRules + ipaJaRules);
};
