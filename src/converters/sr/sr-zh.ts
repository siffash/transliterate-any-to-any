import { Text } from "types";

export const srZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");

  return convertText(text, srIpaRules + ipaZhOvaRules + ipaZhLjeRules + ipaZhRules);
};
