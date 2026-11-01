import { Text } from "types";

export const enZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ettRestoreRules, syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaZhRules } = await import("data/en/en-ipa_zh.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(enIpaZhRules + ipaZhRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLRestoreRules, ettRestoreRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLRestoreRules, ettRestoreRules);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
