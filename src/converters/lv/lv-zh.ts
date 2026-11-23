import { Text } from "types";

export const lvZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvIpaRules } = await import("data/lv/lv-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, lvIpaRules + ipaZhRules);
};
