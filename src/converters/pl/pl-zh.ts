import { Text } from "types";

export const plZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { plIpaZhRules } = await import("data/pl/pl-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");

  return convertText(text, plIpaRules + plIpaZhRules + ipaZhChaRules + ipaZhRules);
};
