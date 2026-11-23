import { Text } from "types";

export const frZh = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { frIpa } = await import("converters/fr/fr-ipa");
  const { ipaZhInRules } = await import("data/ipa/ipa-zh_in.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  return convertText(text, ipaZhInRules + ipaZhRules, {
    source: words =>
      frIpa(words, { velarA: true, keepSchwa: true, velarNasals: true, finalIeu: true }),
  });
};
