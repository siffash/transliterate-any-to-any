import { Text } from "types";

export const enMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, ipaMsRules, { source: enIpa, caseLang: "ms" });
};
