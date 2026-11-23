import { Text } from "types";

export const enLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireLongRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");
  const { enIpaLvRules } = await import("data/en/en-ipa_lv.rules");

  return convertText(text, enIpaLvRules + ipaLvRules, {
    source: words => enIpa(words, [...syllabicLRestoreRules, ...shireLongRestoreRules]),
    caseLang: "lv",
  });
};
