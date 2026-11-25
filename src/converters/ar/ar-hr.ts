import { Text } from "types";

export const arHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(text, arIpaArticleRules + ipaHrRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
