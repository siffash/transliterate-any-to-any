import { Text } from "types";

export const enLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");
  const { enLtShireRules } = await import("data/en/en-lt_shire.rules");
  const { enIpaLtRules } = await import("data/en/en-ipa_lt.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaLtRules + ipaLtRules + enLtShireRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, [...syllabicLRestoreRules, ...shireRestoreRules]);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "lt"));
  return typeof text === "string" ? result[0] : result;
};
