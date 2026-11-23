import { Text } from "types";

export const zhKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhIpaKaRules } = await import("data/zh/zh-ipa_ka.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, zhIpaKaRules + ipaKaRules, { source: zhIpa });
};
