import { Text } from "types";

export const koAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpaParkRules } = await import("data/ko/ko-ipa_park.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaArRules } = await import("data/ko/ko-ipa_ar.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaEoRules + koIpaArRules + ipaArRules, {
    source: words =>
      koIpa(words, { name: "~", syllable: "~" }, koIpaLiRules + koIpaParkRules + koIpaVoicedRules),
  });
};
