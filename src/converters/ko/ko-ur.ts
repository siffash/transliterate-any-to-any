import { Text } from "types";

export const koUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpaParkRules } = await import("data/ko/ko-ipa_park.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaUrRules } = await import("data/ko/ko-ipa_ur.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaEoRules + koIpaUrRules + ipaUrRules, {
    source: words =>
      koIpa(words, { name: "~", syllable: "~" }, koIpaLiRules + koIpaParkRules + koIpaVoicedRules),
  });
};
