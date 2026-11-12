import { Text } from "types";

export const enFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(ipaFaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
      geminateRestoreRules,
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
      geminateRestoreRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
