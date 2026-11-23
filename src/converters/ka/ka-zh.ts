import { Text } from "types";

export const kaZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaIpaRules } = await import("data/ka/ka-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, kaIpaRules + ipaZhRules);
};
