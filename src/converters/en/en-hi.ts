import { Text } from "types";

export const enHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLSchwaRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { ipaILongRules } = await import("data/ipa/ipa_i-long.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  return convertText(text, enIpaRetroflexRules + ipaILongRules + ipaHiRules, {
    source: words =>
      enIpa(
        words,
        [...syllabicLSchwaRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
        geminateRestoreRules,
      ),
  });
};
