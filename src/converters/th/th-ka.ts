import { Text } from "types";

export const thKa = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  return thIpaText(text, ipaKaRules);
};
