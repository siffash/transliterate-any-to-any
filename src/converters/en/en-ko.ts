import { Text } from "types";

export const enKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    ettRestoreRules,
    syllabicLRestoreRules,
    koGeminateRestoreRules,
    areRestoreRules,
    koRVowelRestoreRules,
    irRestoreRules,
    arOrRestoreRules,
    koVowelRestoreRules,
    koSkippedVowelRestoreRules,
    mouthRestoreRules,
    mouthReducedRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
    sexRestoreRules,
    juzRestoreRules,
    yesRestoreRules,
    yesVoicelessRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaOuRules } = await import("data/en/en-ipa_ou.rules");
  const { enIpaKoRules } = await import("data/en/en-ipa_ko.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");

  return convertText(text, enIpaShireRules + enIpaOuRules + enIpaKoRules + ipaKoRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLRestoreRules,
          ...areRestoreRules,
          ...koRVowelRestoreRules,
          ...koVowelRestoreRules,
          ...mouthReducedRestoreRules,
          ...boroughReducedRestoreRules,
          ...yesVoicelessRestoreRules,
        ],
        [
          ...ettRestoreRules,
          ...koGeminateRestoreRules,
          ...irRestoreRules,
          ...arOrRestoreRules,
          ...koSkippedVowelRestoreRules,
          ...mouthRestoreRules,
          ...boroughRestoreRules,
          ...sexRestoreRules,
          ...juzRestoreRules,
          ...yesRestoreRules,
        ],
      ),
  });
};
