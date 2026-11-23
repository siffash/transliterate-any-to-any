import { Text } from "types";

export const enBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaBsRules } = await import("data/ipa/ipa-bs.rules");

  return convertText(text, ipaBsRules, {
    source: words => enIpa(words, syllabicLRestoreRules),
    caseLang: "bs",
  });
};
