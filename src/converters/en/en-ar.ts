import { Text } from "types";

export const enAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
    ayRestoreRules,
    ayDiphthongRestoreRules,
    yesRestoreRules,
    yesDiphthongRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  return convertText(text, ipaArRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLRestoreRules,
          ...geminateSingleRestoreRules,
          ...airRestoreRules,
          ...ayDiphthongRestoreRules,
          ...yesDiphthongRestoreRules,
        ],
        [...geminateRestoreRules, ...ayRestoreRules, ...yesRestoreRules],
      ),
  });
};
