import { Text } from "types";

export const zhUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaRRules } = await import("data/zh/zh-ipa_r.rules");
  const { zhIpaVoicedRules } = await import("data/zh/zh-ipa_voiced.rules");
  const { zhIpaFaRules } = await import("data/zh/zh-ipa_fa.rules");
  const { ipaAspirationDropRules } = await import("data/ipa/ipa_aspiration-drop.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { urAiRules } = await import("data/ur/ur_ai.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(
    text,
    zhIpaArabRules +
      zhIpaVoicedRules +
      zhIpaRRules +
      zhIpaFaRules +
      ipaAspirationDropRules +
      ipaUrRules +
      urAiRules,
    { source: zhIpa },
  );
};
