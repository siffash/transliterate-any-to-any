import { Text } from "types";

export const arHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { ipaHiAiRules } = await import("data/ipa/ipa-hi_ai.rules");

  return convertText(text, ipaHiAiRules + ipaHiRules, {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
