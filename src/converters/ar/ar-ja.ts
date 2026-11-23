import { Text } from "types";

export const arJa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");
  const { ipaJoinRules } = await import("data/ipa/ipa_join.rules");

  return convertText(text, ipaJoinRules + ipaJaRules + "::Title;", {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
