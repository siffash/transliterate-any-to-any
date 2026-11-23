import { Text } from "types";

export const frNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  return convertText(text, ipaNoRules, { source: frIpa, caseLang: "no", elision: true });
};
