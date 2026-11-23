import { Text } from "types";

export const jaHe = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaHeRules, { source: jaIpa });
};
