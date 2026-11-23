import { Text } from "types";

export const enEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, ipaEtRules, { source: enIpa, caseLang: "et" });
};
