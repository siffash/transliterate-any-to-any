import { Text } from "types";

export const hiZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { ipaZhFaiRules } = await import("data/ipa/ipa-zh_fai.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhChaRules } = await import("data/ipa/ipa-zh_cha.rules");

  return convertText(text, hiIpaRules + ipaGemRules + ipaZhFaiRules + ipaZhChaRules + ipaZhRules);
};
