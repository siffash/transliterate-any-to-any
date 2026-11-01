import { Text } from "types";

export const enHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, geminateRestoreRules, geminateSingleRestoreRules } =
    await import("helpers/normalizeEnIpa");
  const { ipaHyRules } = await import("data/ipa/ipa-hy.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaHyRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return copyCase(text, transliterator.transliterate(ipa), "hy");
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "hy"));
  }
};
