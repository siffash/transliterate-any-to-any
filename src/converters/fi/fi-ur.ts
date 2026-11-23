import { Text } from "types";

export const fiUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, fiIpaRules + ipaUrRules);
};
