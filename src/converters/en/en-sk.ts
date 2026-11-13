import { Text } from "types";

export const enSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaSkRules } = await import("data/ipa/ipa-sk.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaSkRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, syllabicLRestoreRules);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "sk"));
  return typeof text === "string" ? result[0] : result;
};
