import { Text } from "types";

export const enJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLeRestoreRules,
    jaRestoreRules,
    ngtRestoreRules,
    irRestoreRules,
    sRestoreRules,
    mouthRestoreRules,
    mouthReducedRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaJaRules } = await import("data/en/en-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");

  return convertText(text, enIpaShireRules + enIpaJaRules + ipaJaRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLeRestoreRules,
          ...jaRestoreRules,
          ...ngtRestoreRules,
          ...mouthReducedRestoreRules,
          ...boroughReducedRestoreRules,
        ],
        [...irRestoreRules, ...sRestoreRules, ...mouthRestoreRules, ...boroughRestoreRules],
      ),
  });
};
