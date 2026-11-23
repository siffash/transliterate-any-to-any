import { Text } from "types";

export const arHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemHuRules } = await import("data/ipa/ipa_gemhu.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(
    text,
    arIpaArticleRules + ipaGemHuRules + ipaHuRules + "::Title;" + arLowerRules,
    { source: arIpa },
  );
};
