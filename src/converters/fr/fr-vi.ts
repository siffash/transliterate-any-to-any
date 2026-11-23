import { Text } from "types";

export const frVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaViRules } = await import("data/ipa/ipa-vi.rules");

  return convertText(text, ipaViRules, { source: frIpa, caseLang: "vi", elision: true });
};
