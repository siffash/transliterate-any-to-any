import { Text } from "types";

export const enSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaSlRules } = await import("data/ipa/ipa-sl.rules");

  return convertText(text, ipaSlRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "sl",
  });
};
