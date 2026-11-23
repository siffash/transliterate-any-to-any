import { Text } from "types";

export const jaAr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaArRules, {
    source: words => jaIpa(words, { units: true }),
    post: joinJaUnits,
  });
};
