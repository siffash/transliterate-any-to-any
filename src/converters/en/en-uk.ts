import { Text } from "types";

export const enUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaUkRules } = await import("data/ipa/ipa-uk.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaAeRules + ipaUkRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "uk");
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "uk"));
  }
};
