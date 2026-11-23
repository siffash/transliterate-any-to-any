import { Text } from "types";

export const koHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { koIpaHyRules } = await import("data/ko/ko-ipa_hy.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaHyRules + ipaHyRules + "::Title;", {
    source: words => koIpa(words, { name: "~", syllable: "~" }),
  });
};
