import { Text } from "types";

export const enNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaNlRules } = await import("data/ipa/ipa-nl.rules");

  return convertText(text, ipaNlRules, { source: enIpa, caseLang: "nl" });
};
