import { Text } from "types";

export const enSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  return convertText(text, ipaSvRules, { source: enIpa, caseLang: "sv" });
};
