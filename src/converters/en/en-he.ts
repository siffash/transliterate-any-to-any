import { Text } from "types";

export const enHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { ipaHeAiRules } = await import("data/ipa/ipa-he_ai.rules");

  return convertText(text, ipaHeAiRules + ipaHeRules, {
    source: words => enIpa(words, [...syllabicLRestoreRules, ...airRestoreRules]),
  });
};
