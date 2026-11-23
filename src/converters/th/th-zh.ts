import { Text } from "types";

export const thZh = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { thIpaZhRules } = await import("data/th/th-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return thIpaText(text, thIpaZhRules + ipaZhRules);
};
