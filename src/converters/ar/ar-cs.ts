import { Text } from "types";

export const arCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(
    text,
    arIpaArticleRules + ipaGemDRules + ipaCsRules + "::Title;" + arLowerRules,
    {
      source: arIpa,
    },
  );
};
