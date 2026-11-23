import { Text } from "types";

export const jaFa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaIpaRules } = await import("data/ja/ja-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { joinJaUnits } = await import("helpers/jaUnits");
  const { jaIpa } = await import("converters/ja/ja-ipa");

  return convertText(text, jaIpaRules + ipaFaRules, {
    source: words => jaIpa(words, { units: true }),
    post: joinJaUnits,
  });
};
