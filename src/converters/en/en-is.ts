import { Text } from "types";

export const enIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaIsRules } = await import("data/ipa/ipa-is.rules");

  return convertText(text, enIpaAeRules + ipaIsRules, { source: enIpa, caseLang: "is" });
};
