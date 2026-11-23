import { Text } from "types";

export const enSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");

  return convertText(text, ipaSkRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "sk",
  });
};
