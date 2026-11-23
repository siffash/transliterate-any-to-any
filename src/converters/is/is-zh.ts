import { Text } from "types";

export const isZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isIpaRules } = await import("data/is/is-ipa.rules");
  const { isIpaZhRules } = await import("data/is/is-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, isIpaRules + isIpaZhRules + ipaZhRules);
};
