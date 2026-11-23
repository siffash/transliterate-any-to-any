import { Text } from "types";

export const etZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, etIpaRules + ipaZhRules);
};
