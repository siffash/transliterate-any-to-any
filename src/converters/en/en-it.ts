import { Text } from "types";

export const enIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  return convertText(text, ipaItRules, { source: enIpa, caseLang: "it" });
};
