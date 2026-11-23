import { Text } from "types";

export const zhHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, ipaHiRules, { source: zhIpa });
};
