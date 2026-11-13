import { Text } from "types";

export const enEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaElRules } = await import("data/en/en-ipa_el.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaElRules + ipaElRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, [...syllabicLRestoreRules, ...airRestoreRules]);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "el"));
  return typeof text === "string" ? result[0] : result;
};
