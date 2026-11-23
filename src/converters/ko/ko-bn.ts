import { Text } from "types";

export const koBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, ipaBnRules, {
    source: words => koIpa(words, { name: "~", syllable: "-" }, koIpaLiRules + koIpaVoicedRules),
  });
};
