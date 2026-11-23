import { Text } from "types";

export const thHy = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");

  return thIpaText(text, ipaHyRules + "::Title;");
};
