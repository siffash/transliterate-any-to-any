import { Text } from "types";

export const arNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");

  return convertText(text, ipaGemTRules + ipaNoRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
