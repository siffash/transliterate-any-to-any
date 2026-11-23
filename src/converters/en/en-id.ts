import { Text } from "types";

export const enId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, ipaIdRules, { source: enIpa, caseLang: "id" });
};
