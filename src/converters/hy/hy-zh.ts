import { Text } from "types";

export const hyZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaSchwaRules } = await import("data/hy/hy-ipa_schwa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, hyIpaRules + hyIpaSchwaRules + ipaZhRules);
};
