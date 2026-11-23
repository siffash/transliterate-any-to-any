import { Text } from "types";

export const enRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");

  return convertText(text, ipaRoRules, { source: enIpa, caseLang: "ro" });
};
