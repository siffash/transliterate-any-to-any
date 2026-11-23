import { Text } from "types";

export const enFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");

  return convertText(text, ipaFiRules, { source: enIpa, caseLang: "fi" });
};
