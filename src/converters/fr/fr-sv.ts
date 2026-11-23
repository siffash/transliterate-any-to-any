import { Text } from "types";

export const frSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaSvRules } = await import("data/ipa/ipa-sv.rules");

  return convertText(text, ipaSvRules, { source: frIpa, caseLang: "sv", elision: true });
};
