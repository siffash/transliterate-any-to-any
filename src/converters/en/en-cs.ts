import { Text } from "types";

export const enCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaCsRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(words, syllabicLRestoreRules);
  const result = ipa.map((ipa, i) => copyCase(words[i], transliterator.transliterate(ipa), "cs"));
  return typeof text === "string" ? result[0] : result;
};
