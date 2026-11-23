import { Text } from "types";

export const arZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arZhRules } = await import("data/ar/ar-zh.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhTiRules } = await import("data/ipa/ipa-zh_ti.rules");

  return convertText(text, arZhRules + ipaGemRules + ipaZhTiRules + ipaZhRules, {
    source: words => arIpa(words, { dropLoneArticle: "all" }),
  });
};
