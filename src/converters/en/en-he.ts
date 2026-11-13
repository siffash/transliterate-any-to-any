import { Text } from "types";

export const enHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");
  const { ipaHeAiRules } = await import("data/ipa/ipa-he_ai.rules");

  const transliterator = RBT.fromRules(ipaHeAiRules + ipaHeRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, [...syllabicLRestoreRules, ...airRestoreRules]);
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};
