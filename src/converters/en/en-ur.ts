import { Text } from "types";

export const enUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { enIpaUrRules } = await import("data/en/en-ipa_ur.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  return convertText(text, enIpaRetroflexRules + enIpaUrRules + ipaUrRules, {
    source: words =>
      enIpa(
        words,
        [...syllabicLRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
        geminateRestoreRules,
      ),
  });
};
