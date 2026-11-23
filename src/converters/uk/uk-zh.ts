import { Text } from "types";

export const ukZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukZhPrefixRules } = await import("data/uk/uk-zh_prefix.rules");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaZhRules } = await import("data/uk/uk-ipa_zh.rules");
  const { ipaIjRules } = await import("data/ipa/ipa_ij.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, ukZhPrefixRules + ukIpaRules + ukIpaZhRules + ipaIjRules + ipaZhRules);
};
