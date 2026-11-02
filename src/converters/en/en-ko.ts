import { Text } from "types";

export const enKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const {
    ettRestoreRules,
    syllabicLRestoreRules,
    koGeminateRestoreRules,
    areRestoreRules,
    koRVowelRestoreRules,
    irRestoreRules,
    arOrRestoreRules,
    koVowelRestoreRules,
    koSkippedVowelRestoreRules,
  } = await import("helpers/normalizeEnIpa");
  const { enIpaOuRules } = await import("data/en/en-ipa_ou.rules");
  const { enIpaKoRules } = await import("data/en/en-ipa_ko.rules");
  const { enIpaKoBatchimRules } = await import("data/en/en-ipa_ko-batchim.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    enIpaOuRules + enIpaKoRules + enIpaKoBatchimRules + ipaKoRules,
  );

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [
        ...syllabicLRestoreRules,
        ...areRestoreRules,
        ...koRVowelRestoreRules,
        ...koVowelRestoreRules,
      ],
      [
        ...ettRestoreRules,
        ...koGeminateRestoreRules,
        ...irRestoreRules,
        ...arOrRestoreRules,
        ...koSkippedVowelRestoreRules,
      ],
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [
        ...syllabicLRestoreRules,
        ...areRestoreRules,
        ...koRVowelRestoreRules,
        ...koVowelRestoreRules,
      ],
      [
        ...ettRestoreRules,
        ...koGeminateRestoreRules,
        ...irRestoreRules,
        ...arOrRestoreRules,
        ...koSkippedVowelRestoreRules,
      ],
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
