import { Text } from "types";

export const frMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaMtRules } = await import("data/ipa/ipa-mt.rules");

  return convertText(text, ipaMtRules, { source: frIpa, caseLang: "mt", elision: true });
};
