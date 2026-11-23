import { Text } from "types";

export const frHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  return convertText(text, ipaHrRules, { source: frIpa, caseLang: "hr", elision: true });
};
