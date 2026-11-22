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
  const { enIpaShireRules } = await import("data/en/en-ipa_shire.rules");

  const transliterator = RBT.fromRules(enIpaShireRules + ipaFaRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [...syllabicLRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
    geminateRestoreRules,
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};
