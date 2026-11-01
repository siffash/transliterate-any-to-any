import { Text } from "types";

export const enHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLSchwaRestoreRules, geminateRestoreRules, geminateSingleRestoreRules } =
    await import("helpers/normalizeEnIpa");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(enIpaRetroflexRules + ipaHiRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [...syllabicLSchwaRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [...syllabicLSchwaRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
