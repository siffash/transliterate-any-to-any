import { Text } from "types";

export const enHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  return convertText(text, ipaHrRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "hr",
  });
};
