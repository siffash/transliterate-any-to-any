import { Text } from "types";

export const thHe = async (text: Text) => {
  const { thIpaText } = await import("converters/th/th-ipa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  return thIpaText(text, ipaHeRules);
};
