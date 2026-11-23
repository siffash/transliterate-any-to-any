import { Text } from "types";

export const zhAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaRRules } = await import("data/zh/zh-ipa_r.rules");
  const { zhIpaVoicedRules } = await import("data/zh/zh-ipa_voiced.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, zhIpaArabRules + zhIpaVoicedRules + zhIpaRRules + ipaArRules, {
    source: zhIpa,
  });
};
