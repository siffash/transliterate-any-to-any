import { Text } from "types";

export const frId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  return convertText(text, ipaIdRules, { source: frIpa, caseLang: "id", elision: true });
};
