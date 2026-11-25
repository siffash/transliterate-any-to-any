import { Text } from "types";

export const arIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(text, arIpaArticleRules + ipaItRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
