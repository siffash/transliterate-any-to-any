import { Text } from "types";

export const enJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLeRestoreRules,
    jaRestoreRules,
    ngtRestoreRules,
    irRestoreRules,
    sRestoreRules,
    mouthRestoreRules,
    mouthReducedRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaJaRules } = await import("data/en/en-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(enIpaJaRules + ipaJaRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [
      ...syllabicLeRestoreRules,
      ...jaRestoreRules,
      ...ngtRestoreRules,
      ...mouthReducedRestoreRules,
      ...boroughReducedRestoreRules,
    ],
    [...irRestoreRules, ...sRestoreRules, ...mouthRestoreRules, ...boroughRestoreRules],
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};
