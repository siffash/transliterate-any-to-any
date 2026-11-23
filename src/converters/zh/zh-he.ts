import { Text } from "types";

export const zhHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaHeARules } = await import("data/ipa/ipa-he_a.rules");
  const { ipaHeXRules } = await import("data/ipa/ipa-he_x.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { zhIpa } = await import("converters/zh/zh-ipa");

  return convertText(text, ipaHeXRules + ipaHeARules + ipaHeRules, { source: zhIpa });
};
