import { Text } from "types";

export const enHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  return convertText(text, ipaHuRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "hu",
  });
};
