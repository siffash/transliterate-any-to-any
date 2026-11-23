import { Text } from "types";

export const thUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, ipaUrRules, { source: thIpaText });
};
