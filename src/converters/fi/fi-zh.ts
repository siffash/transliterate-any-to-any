import { Text } from "types";

export const fiZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiIpaRules } = await import("data/fi/fi-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { fiIpaZhRules } = await import("data/fi/fi-ipa_zh.rules");

  return convertText(text, fiIpaRules + fiIpaZhRules + ipaZhRules);
};
