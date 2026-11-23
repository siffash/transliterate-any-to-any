import { Text } from "types";

export const enZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    ettRestoreRules,
    syllabicLRestoreRules,
    ngConsonantRestoreRules,
    airRestoreRules,
    mouthRestoreRules,
    mouthDiphthongRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
    juzRestoreRules,
    yesRestoreRules,
    yesVoicelessRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaZhRules } = await import("data/en/en-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, enIpaZhRules + ipaZhRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLRestoreRules,
          ...ngConsonantRestoreRules,
          ...airRestoreRules,
          ...mouthDiphthongRestoreRules,
          ...boroughReducedRestoreRules,
          ...yesVoicelessRestoreRules,
        ],
        [
          ...ettRestoreRules,
          ...mouthRestoreRules,
          ...boroughRestoreRules,
          ...juzRestoreRules,
          ...yesRestoreRules,
        ],
      ),
  });
};
