import { Text } from "types";

export const slZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaZhOvaRules } = await import("data/ipa/ipa-zh_ova.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhLjeRules } = await import("data/ipa/ipa-zh_lje.rules");

  return convertText(text, slIpaRules + ipaZhOvaRules + ipaZhLjeRules + ipaZhRules);
};
