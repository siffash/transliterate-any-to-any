import { Text } from "types";

export const enDe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  return convertText(text, ipaDeRules, { source: enIpa, caseLang: "de" });
};
