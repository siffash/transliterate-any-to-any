import { Text } from "types";

export const mtZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { mtIpaZhRules } = await import("data/mt/mt-ipa_zh.rules");
  const { ipaZhSanRules } = await import("data/ipa/ipa-zh_san.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, mtIpaRules + mtIpaZhRules + ipaZhSanRules + ipaZhRules);
};
