import { Text } from "types";

export const arAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaDottedIRules } = await import("data/ipa/ipa_dotted-i.rules");
  const { arIpaArticleRules } = await import("data/ar/ar-ipa_article.rules");
  const { latnQHoldRules } = await import("data/latn/latn_q-hold.rules");
  const { latnQRestoreRules } = await import("data/latn/latn_q-restore.rules");

  return convertText(
    text,
    arIpaArticleRules +
      latnQHoldRules +
      ipaAzRules +
      ipaDottedIRules +
      "::Title;" +
      arLowerRules +
      latnQRestoreRules,
    { source: arIpa },
  );
};
