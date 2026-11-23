import { Text } from "types";

export const enFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");

  return convertText(text, enIpaShireRules + ipaFaRules, {
    source: words =>
      enIpa(
        words,
        [...syllabicLRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
        geminateRestoreRules,
      ),
  });
};
