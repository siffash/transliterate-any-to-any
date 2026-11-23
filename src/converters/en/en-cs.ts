import { Text } from "types";

export const enCs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");

  return convertText(text, ipaCsRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "cs",
  });
};
