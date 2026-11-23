import { Text } from "types";

export const frEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, ipaEtRules, { source: frIpa, caseLang: "et", elision: true });
};
