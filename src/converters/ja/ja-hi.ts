import { Text } from "types";

export const jaHi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaHiRules, { source: jaIpa });
};
