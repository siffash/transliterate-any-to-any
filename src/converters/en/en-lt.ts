import { Text } from "types";

export const enLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");
  const { enLtShireRules } = await import("data/en/en-lt_shire.rules");
  const { enIpaLtRules } = await import("data/en/en-ipa_lt.rules");

  return convertText(text, enIpaLtRules + ipaLtRules + enLtShireRules, {
    source: words => enIpa(words, [...syllabicLRestoreRules, ...shireRestoreRules]),
    caseLang: "lt",
  });
};
