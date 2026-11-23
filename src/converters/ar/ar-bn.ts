import { Text } from "types";

export const arBn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaBnYRules } = await import("data/ipa/ipa-bn_y.rules");
  const { ipaBnAjRules } = await import("data/ipa/ipa-bn_aj.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  return convertText(text, ipaBnAjRules + ipaBnYRules + ipaBnRules, {
    source: words => arIpa(words, { dropLoneArticle: true }),
  });
};
