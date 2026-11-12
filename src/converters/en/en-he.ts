import { Text } from "types";

export const enHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { ipaHeAiRules } = await import("data/ipa/ipa-he_ai.rules");

  const transliterator = RBT.fromRules(ipaHeAiRules + ipaHeRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, [...syllabicLRestoreRules, ...airRestoreRules]);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, [...syllabicLRestoreRules, ...airRestoreRules]);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
