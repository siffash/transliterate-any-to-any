import { Text } from "types";

export const jaKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaKaRules, { source: jaIpa });
};
