import { Text } from "types";

export const jaHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { jaIpaHyRules } = await import("data/ja/ja-ipa_hy.rules");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + jaIpaHyRules + ipaHyRules + "::Title;", { source: jaIpa });
};
