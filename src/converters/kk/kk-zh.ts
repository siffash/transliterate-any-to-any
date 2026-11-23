import { Text } from "types";

export const kkZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { kkIpaZhRules } = await import("data/kk/kk-ipa_zh.rules");

  return convertText(text, kkIpaRules + kkIpaZhRules + ipaZhRules);
};
