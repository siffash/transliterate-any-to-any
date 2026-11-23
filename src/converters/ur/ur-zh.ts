import { Text } from "types";

export const urZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaZhFaiRules } = await import("data/ipa/ipa-zh_fai.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { urIpaZhRules } = await import("data/ur/ur-ipa_zh.rules");

  return convertText(text, ipaGemRules + urIpaZhRules + ipaZhFaiRules + ipaZhRules, {
    source: urIpa,
  });
};
