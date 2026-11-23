import { Text } from "types";

export const koKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, ipaKaRules, {
    source: words => koIpa(words, { name: "~", syllable: "~" }),
  });
};
