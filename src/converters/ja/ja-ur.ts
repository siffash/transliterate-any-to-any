import { Text } from "types";

export const jaUr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaUrRules, { source: jaIpa });
};
