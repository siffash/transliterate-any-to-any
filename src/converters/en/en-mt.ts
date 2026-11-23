import { Text } from "types";

export const enMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, ipaMtRules, { source: enIpa, caseLang: "mt" });
};
