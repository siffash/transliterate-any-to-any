import { Text } from "types";

export const enEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaEsRules } = await import("data/ipa/ipa-es.rules");

  return convertText(text, ipaEsRules, { source: enIpa, caseLang: "es" });
};
