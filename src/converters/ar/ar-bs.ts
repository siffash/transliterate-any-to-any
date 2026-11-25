import { Text } from "types";

export const arBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(
    text,
    arIpaArticleRules + ipaGemRules + ipaBsRules + "::Title;" + arLowerRules,
    { source: arIpa },
  );
};
