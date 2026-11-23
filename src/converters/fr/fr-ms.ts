import { Text } from "types";

export const frMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  return convertText(text, ipaMsRules, { source: frIpa, caseLang: "ms", elision: true });
};
