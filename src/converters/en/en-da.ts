import { Text } from "types";

export const enDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaDaRules } = await import("data/ipa/ipa-da.rules");

  return convertText(text, ipaDaRules, { source: enIpa, caseLang: "da" });
};
