import { Text } from "types";

export const arMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  return convertText(text, ipaMkRules + "::Title;" + arLowerRules, {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
