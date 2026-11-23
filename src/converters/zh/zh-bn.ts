import { Text } from "types";

export const zhBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhIpaArabRules } = await import("data/zh/zh-ipa_arab.rules");
  const { zhIpaBnRules } = await import("data/zh/zh-ipa_bn.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, zhIpaArabRules + zhIpaBnRules + ipaBnRules, { source: zhIpa });
};
