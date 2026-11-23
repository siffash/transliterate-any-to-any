import { Text } from "types";

export const thFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  return convertText(text, ipaFaRules, { source: thIpaText });
};
