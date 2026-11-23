import { Text } from "types";

export const arEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaEtRules } = await import("data/ipa/ipa-et.rules");

  return convertText(text, ipaGemTRules + ipaEtRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
