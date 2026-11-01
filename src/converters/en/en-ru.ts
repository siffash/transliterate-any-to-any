import { Text } from "types";

export const enRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { enIpaRuRules } = await import("data/en/en-ipa_ru.rules");
  const { ipaRuRules } = await import("data/ipa/ipa-ru.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaAeRules + enIpaRuRules + ipaRuRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "ru");
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "ru"));
  }
};
