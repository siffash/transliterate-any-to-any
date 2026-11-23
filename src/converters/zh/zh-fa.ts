import { Text } from "types";

export const zhFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaRRules } = await import("data/zh/zh-ipa_r.rules");
  const { zhIpaFaRules } = await import("data/zh/zh-ipa_fa.rules");
  const { zhIpaVoicedRules } = await import("data/zh/zh-ipa_voiced.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(
    text,
    zhIpaArabRules + zhIpaRRules + zhIpaFaRules + zhIpaVoicedRules + ipaFaRules,
    { source: zhIpa },
  );
};
