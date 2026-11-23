import { Text } from "types";

export const ltZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ltIpaZhRules } = await import("data/lt/lt-ipa_zh.rules");

  return convertText(text, ltIpaRules + ltIpaZhRules + ipaZhRules);
};
