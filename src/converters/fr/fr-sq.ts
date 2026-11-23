import { Text } from "types";

export const frSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  return convertText(text, ipaSqRules, { source: frIpa, caseLang: "sq", elision: true });
};
