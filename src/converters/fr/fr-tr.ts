import { Text } from "types";

export const frTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaTrRules } = await import("data/ipa/ipa-tr.rules");

  return convertText(text, ipaTrRules, { source: frIpa, caseLang: "tr", elision: true });
};
