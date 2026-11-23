import { Text } from "types";

export const enEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaElRules } = await import("data/en/en-ipa_el.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");

  return convertText(text, enIpaElRules + ipaElRules, {
    source: words => enIpa(words, [...syllabicLRestoreRules, ...airRestoreRules]),
    caseLang: "el",
    elision: "'",
  });
};
