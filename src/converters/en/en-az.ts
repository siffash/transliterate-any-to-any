import { Text } from "types";

export const enAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");
  const { ipaThTRules } = await import("data/ipa/ipa_th-t.rules");
  const { enIpaARules } = await import("data/en/en-ipa_a.rules");

  return convertText(text, ipaThTRules + enIpaARules + ipaAzRules, {
    source: words => enIpa(words, [...syllabicLRestoreRules, ...shireRestoreRules]),
    caseLang: "az",
  });
};
