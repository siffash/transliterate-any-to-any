import { Text } from "types";

export const enHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    syllabicLSchwaRestoreRules,
    geminateRestoreRules,
    geminateSingleRestoreRules,
    airRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { enIpaHiRules } = await import("data/en/en-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(enIpaRetroflexRules + enIpaHiRules + ipaHiRules);

  const words = typeof text === "string" ? [text] : text;
  const ipa = await enIpa<string[]>(
    words,
    [...syllabicLSchwaRestoreRules, ...geminateSingleRestoreRules, ...airRestoreRules],
    geminateRestoreRules,
  );
  const result = ipa.map(ipa => transliterator.transliterate(ipa));
  return typeof text === "string" ? result[0] : result;
};
