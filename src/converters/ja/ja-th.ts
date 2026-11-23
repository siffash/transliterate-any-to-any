import { Text } from "types";

export const jaTh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { jaIpaThRules } = await import("data/ja/ja-ipa_th.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + jaIpaThRules + ipaThRules + ipaThKaranRules, {
    source: jaIpa,
  });
};
