import { Text } from "types";

export const koHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, ipaHiRules, {
    source: words => koIpa(words, { name: "~", syllable: "-" }, koIpaLiRules + koIpaVoicedRules),
  });
};
