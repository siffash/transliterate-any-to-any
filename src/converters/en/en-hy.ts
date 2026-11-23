import { Text } from "types";

export const enHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
    shireRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { enIpaHyRules } = await import("data/en/en-ipa_hy.rules");

  return convertText(text, enIpaHyRules + ipaHyRules + hyEvRules, {
    source: words =>
      enIpa(
        words,
        [
          ...syllabicLRestoreRules,
          ...geminateSingleRestoreRules,
          ...airRestoreRules,
          ...shireRestoreRules,
        ],
        geminateRestoreRules,
      ),
    caseLang: "hy",
    elision: "'",
  });
};
