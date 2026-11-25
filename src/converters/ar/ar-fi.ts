import { Text } from "types";

export const arFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemTRules } = await import("data/ipa/ipa_gemt.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaFiRules } = await import("data/ipa/ipa-fi.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");

  return convertText(
    text,
    arIpaArticleRules + ipaGemTRules + ipaFiRules + "::Title;" + arLowerRules,
    {
      source: arIpa,
    },
  );
};
