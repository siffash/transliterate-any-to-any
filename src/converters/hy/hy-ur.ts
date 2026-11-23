import { Text } from "types";

export const hyUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, hyIpaRules + ipaAspirationDropRules + ipaUrRules);
};
