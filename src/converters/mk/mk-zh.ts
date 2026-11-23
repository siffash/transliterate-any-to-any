import { Text } from "types";

export const mkZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaZhEvRules } = await import("data/ipa/ipa-zh_ev.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, mkIpaRules + ipaZhChaRules + ipaZhEvRules + ipaZhRules);
};
