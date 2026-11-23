import { Text } from "types";

export const srUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, srIpaRules + ipaUrRules);
};
