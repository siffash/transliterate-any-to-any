import { Text } from "types";

export const arRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(
    text,
    arIpaArticleRules + ipaGemRules + ipaRoRules + "::Title;" + arLowerRules,
    { source: arIpa },
  );
};
