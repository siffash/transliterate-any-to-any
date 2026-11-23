import { Text } from "types";

export const ruZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruZhPrefixRules } = await import("data/ru/ru-zh_prefix.rules");
  const { ruIpaRules } = await import("data/ru/ru-ipa.rules");
  const { ruIpaZhRules } = await import("data/ru/ru-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, ruZhPrefixRules + ruIpaRules + ruIpaZhRules + ipaZhRules);
};
