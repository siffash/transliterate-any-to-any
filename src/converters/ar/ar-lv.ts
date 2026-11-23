import { Text } from "types";

export const arLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(text, arIpaArticleRules + ipaLvRules + "::Title;" + arLowerRules, {
    source: arIpa,
  });
};
