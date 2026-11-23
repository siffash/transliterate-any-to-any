import { Text } from "types";

export const enPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaPlRules } = await import("data/ipa/ipa-pl.rules");

  return convertText(text, ipaPlRules, { source: enIpa, caseLang: "pl" });
};
