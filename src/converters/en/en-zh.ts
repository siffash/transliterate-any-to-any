import { Text } from "types";

export const enZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    ettRestoreRules,
    syllabicLRestoreRules,
    ngConsonantRestoreRules,
    airRestoreRules,
    mouthRestoreRules,
    mouthDiphthongRestoreRules,
    boroughRestoreRules,
    boroughReducedRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaZhRules } = await import("data/en/en-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(enIpaZhRules + ipaZhRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [
      ...syllabicLRestoreRules,
      ...ngConsonantRestoreRules,
      ...airRestoreRules,
      ...mouthDiphthongRestoreRules,
      ...boroughReducedRestoreRules,
    ],
    [...ettRestoreRules, ...mouthRestoreRules, ...boroughRestoreRules],
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};
