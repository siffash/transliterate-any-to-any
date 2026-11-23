import { Text } from "types";

export const bgZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgZhPrefixRules } = await import("data/bg/bg-zh_prefix.rules");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaZhEvRules } = await import("data/ipa/ipa-zh_ev.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(
    text,
    bgZhPrefixRules + bgIpaRules + ipaZhChaRules + ipaZhEvRules + ipaZhRules,
  );
};
