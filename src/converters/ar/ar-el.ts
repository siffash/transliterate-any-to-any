import { Text } from "types";

export const arEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  return convertText(text, ipaGemRules + ipaElRules + "::Title;" + arLowerRules, {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
