import { Text } from "types";

export const enJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLeRestoreRules, jaRestoreRules, irRestoreRules, sRestoreRules } =
    await import("helpers/normalizeEnIpa");
  const { enIpaJaRules } = await import("data/en/en-ipa_ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(enIpaJaRules + ipaJaRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [...syllabicLeRestoreRules, ...jaRestoreRules],
      [...irRestoreRules, ...sRestoreRules],
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [...syllabicLeRestoreRules, ...jaRestoreRules],
      [...irRestoreRules, ...sRestoreRules],
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
