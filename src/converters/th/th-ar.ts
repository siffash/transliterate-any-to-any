import { Text } from "types";

export const thAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ipaArRules, { source: thIpaText });
};
