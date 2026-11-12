import { Text } from "types";

export const enKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, airRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(ipaKaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, [...syllabicLRestoreRules, ...airRestoreRules]);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, [...syllabicLRestoreRules, ...airRestoreRules]);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
