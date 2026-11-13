import { Text } from "types";

export const enLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, shireLongRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");
  const { enIpaLvRules } = await import("data/en/en-ipa_lv.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaLvRules + ipaLvRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, [...syllabicLRestoreRules, ...shireLongRestoreRules]);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "lv"));
  return typeof text === "string" ? result[0] : result;
};
