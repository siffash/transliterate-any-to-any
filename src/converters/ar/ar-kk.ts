import { Text } from "types";

export const arKk = async (text: Text) => {
  const { kkHRules } = await import("data/kk/kk_h.rules");
  const { convertText } = await import("helpers/convertText");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arKkRules } = await import("data/ar/ar-kk.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  return convertText(
    text,
    ipaGemDRules + ipaKkRules + arKkRules + "::Title;" + arLowerRules + kkHRules,
    { source: words => arIpa(words, { dropLoneArticle: true }) },
  );
};
