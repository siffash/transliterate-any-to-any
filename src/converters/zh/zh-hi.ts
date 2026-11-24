import { Text } from "types";

export const zhHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaHiORules } = await import("data/ipa/ipa-hi_o.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, ipaHiORules + ipaHiRules, { source: zhIpa });
};
