import { Text } from "types";

export const enUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules, geminateRestoreRules, geminateSingleRestoreRules } =
    await import("helpers/normalizeEnIpa");
  const { enIpaRetroflexRules } = await import("data/en/en-ipa_retroflex.rules");
  const { enIpaUrRules } = await import("data/en/en-ipa_ur.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(enIpaRetroflexRules + enIpaUrRules + ipaUrRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(
      text,
      [...syllabicLRestoreRules, ...geminateSingleRestoreRules],
      geminateRestoreRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
