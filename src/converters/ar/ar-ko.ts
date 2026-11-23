import { Text } from "types";

export const arKo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoHyphenCcRules } = await import("data/ipa/ipa-ko_hyphen-cc.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  return convertText(text, ipaKoFinalKpRules + ipaKoHyphenCcRules + ipaKoRules + "::Title;", {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
