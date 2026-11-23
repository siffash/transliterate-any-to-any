import { Text } from "types";

export const koFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { koIpaLiRules } = await import("data/ko/ko-ipa_li.rules");
  const { koIpaVoicedRules } = await import("data/ko/ko-ipa_voiced.rules");
  const { koIpaParkRules } = await import("data/ko/ko-ipa_park.rules");
  const { koIpaUnitRules } = await import("data/ko/ko-ipa_unit.rules");
  const { koIpaShiRules } = await import("data/ko/ko-ipa_shi.rules");
  const { koIpaEoRules } = await import("data/ko/ko-ipa_eo.rules");
  const { koIpaFaRules } = await import("data/ko/ko-ipa_fa.rules");
  const { koIpa } = await import("converters/ko/ko-ipa");

  return convertText(text, koIpaUnitRules + koIpaEoRules + koIpaFaRules + ipaFaRules, {
    source: words =>
      koIpa(
        words,
        { name: "~", syllable: "~", unit: "^" },
        koIpaLiRules + koIpaParkRules + koIpaShiRules + koIpaVoicedRules,
      ),
  });
};
