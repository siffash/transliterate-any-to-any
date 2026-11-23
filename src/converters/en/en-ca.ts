import { Text } from "types";

export const enCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaCaRules } = await import("data/ipa/ipa-ca.rules");

  return convertText(text, ipaCaRules, { source: enIpa, caseLang: "ca" });
};
