import { Text } from "types";

export const jaBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaBnRules, { source: jaIpa });
};
