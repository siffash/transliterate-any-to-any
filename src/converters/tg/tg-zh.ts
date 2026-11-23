import { Text } from "types";

export const tgZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, tgIpaRules + ipaZhRules);
};
